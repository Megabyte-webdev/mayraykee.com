import { useCallback, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { axiosClient } from "../services/axios-client";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";
import { ResourceContext } from "../context/ResourceContext";

import { toast } from 'react-toastify'; // Import toastify for toast messages
function useCart() {
  
  const { authDetails } = useContext(AuthenticationContext);
  const client = axiosClient(authDetails.token);
  const { setCartItems, cartItems } = useContext(ResourceContext);
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setIsLoading] = useState(false);
// Remove items from the cart on the server with token header
const removeItemsFromCartOnServer = async (data) => {
  setIsLoading(true); // Set loading to true at the start

  try {
    // Ensure `data` is always handled as an array
    const items = Array.isArray(data) ? data : [data];
    const errors = [];
    const successes = [];

    for (const item of items) {
      try {
        console.log(`/cart/removeCart/${item?.cartsId}`);
        const response = await client.post(`/cart/removeCart/${item?.cartsId}`);

        if (response) {
          await getCartItemsByUserID(); // Refresh cart items
          console.log(cartItems);
          successes.push(item?.title || "unknown item");
        }
      } catch (error) {
        console.error(`Failed to remove item ${item?.id} from cart:`, error);
        errors.push(item?.title || "unknown item");
      }
    }

    // Call onSuccess if all items removed successfully
    if (successes.length > 0 && errors.length === 0) {
      onSuccess({
        message: `Item${successes.length >1 ? "s" :""} successfully removed from cart`,
        success: successes,
      });
    }

    // Handle mixed results (some errors and some successes)
    if (errors.length > 0 && successes.length > 0) {
      onFailure({
        message: "Partial Removal",
        error: `Failed to remove the following items: ${errors.join(", ")}`,
      });
      toast.success(
        "Some items were successfully removed, but some failed. Please try again."
      );
    }

    // Call onFailure if all items failed
    if (errors.length > 0 && successes.length === 0) {
      onFailure({
        message: "Failed to remove items from cart",
        error: `Failed to remove the following items: ${errors.join(", ")}`,
      });
    }
  } catch (error) {
    // Handle unexpected errors
    onFailure({
      message: "Unexpected Error",
      error: "An error occurred while processing your request. Please try again.",
    });
    console.error("Unexpected error during removal:", error);
  } finally {
    setIsLoading(false); // Reset loading state
  }
};


  const getCartItemsByUserID = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await client.get(`/cart/getCart/${authDetails.user.id}`);
      setCartItems(response.data.Cart);
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, "Cart Error");
    }
  }, []);

  const checkCartForCourse = (
    courseId: string,
    setIsInCart: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (cartItems?.length !== 0) {
      if (cartItems?.find((current) => current.courseId === Number(courseId))) {
        return setIsInCart(true);
      } else {
        return setIsInCart(false);
      }
    }

    return setIsInCart(false);
  };

  const addCourseToCart = useCallback(async (courseId: string) => {
    setIsLoading(true);
    try {
      const response = await client.post("/cart/addCart", {
        user_id: authDetails.user.id,
        course_id: courseId,
      });
      console.log(response);
      getCartItemsByUserID()
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, "Cart Error");
    }
  }, []);

  useEffect(() => {
    if (error.message && error.error) {
      onFailure(error);
      setError({
        message: "",
        error: "",
      });
      setIsLoading(false);
    }
  }, [error.message, error.error]);


  useEffect(() => {
    getCartItemsByUserID();
  }, []);

  return {
    getCartItemsByUserID,
    addCourseToCart,
    checkCartForCourse,
    removeItemsFromCartOnServer,
    loading
  };
}

export default useCart;
