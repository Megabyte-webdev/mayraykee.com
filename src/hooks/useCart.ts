import { useCallback, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { axiosClient } from "../services/axios-client";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";

function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const { authDetails } = useContext(AuthenticationContext);
  const client = axiosClient(authDetails.token);
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setIsLoading] = useState(false);

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
    cartItems,
    checkCartForCourse,
    loading
  };
}

export default useCart;
