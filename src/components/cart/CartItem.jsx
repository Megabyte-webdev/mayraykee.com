import { useEffect, useState, useContext } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FormatPrice } from "../../utils/UtilMethods";
import Laptop from "../../assets/jpgs/lappy.jpg";
import { RiDeleteBin6Line } from "react-icons/ri"; // Importing delete icon
import { RiLoader4Fill } from "react-icons/ri"; // Importing loader icon
import axios from "axios"; // Importing axios for HTTP requests
import { BASE_URL } from '../../utils/base'; // Import your base URL
import { toast } from 'react-toastify'; // Import toastify for toast messages
import { AuthenticationContext } from "../../context/AuthenticationContext";

function CartItem({
  data,
  setSelectedItems,
  selectedItems,
  isAllChecked,
  setIsAllChecked,
}) {
  const { authDetails } = useContext(AuthenticationContext);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  // Toggle checked state for selection
  const toggleIsChecked = () => setIsChecked(!isChecked);

  // Add item to the selected cart
  const addItemToCart = () => {
    const isFound = selectedItems?.some((current) => current?.cartsId === data?.cartsId);
    if (!isFound) {
      setSelectedItems((prev) => [...prev, data]);
    }
    toggleIsChecked();
  };

  // Remove item from the selected cart (locally)
  const removeItemFromSelectedCart = () => {
    setSelectedItems((prev) =>
      prev.filter((current) => current?.cartsId !== data?.cartsId)
    );
    setIsAllChecked(false); // Reset "Select All" state if item is removed
  };

  // Remove item from the cart on the server with token header
  const removeItemFromCartOnServer = async () => {
    setLoading(true); // Set loading to true when the request starts

    // Retrieve the token from localStorage (or cookie, depending on where it's stored)
    try {
      // Make API call to remove the item from the server with token in the headers
      await axios.post(
        `${BASE_URL}/cart/removeCart/${parseInt(data?.cartsId)}`,{
          headers: {
            Authorization: `Bearer ${authDetails?.token}`, // Include the token in the Authorization header
          },
        }
      );

      // If the server request is successful, also remove it locally
      removeItemFromSelectedCart();
      toast.success("Item successfully removed from the cart!"); // Success toast
    } catch (error) {
      console.log(authDetails.token, data)
      console.error("Error removing item from cart:", error);
      toast.error("Failed to remove item from cart. Please try again."); // Error toast
    } finally {
      setLoading(false); // Set loading to false once the request is done
    }
  };

  // Update the checked state when `selectedItems` or `isAllChecked` change
  useEffect(() => {
    if (isAllChecked) {
      setIsChecked(true); // Mark all items as checked if "Select All" is true
    } else {
      const isFound = selectedItems?.some((current) => current?.cartsId === data?.cartsId);
      setIsChecked(isFound); // Check if this item is selected
    }
  }, [selectedItems, isAllChecked, data?.cartsId]);

  return (
    <div className="w-full border-b flex gap-[10px] py-[10px] items-center">
      {isChecked ? (
        <IoCheckbox
          onClick={addItemToCart}
          className="text-xl cursor-pointer text-[#4cbc9a]"
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          onClick={addItemToCart}
          className="text-xl cursor-pointer"
        />
      )}
      <img className="h-[100px] w-[100px] bg-gray-400" src={Laptop} alt="Product" />
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-md">{data?.title}</h3>
        <p className="text-small text-amber-500">{FormatPrice(Number(data?.price))}</p>
      </div>

      {/* Remove from cart button */}
      <button
        onClick={removeItemFromCartOnServer}
        className="text-red-500 hover:text-red-700 ml-3"
        disabled={loading} // Disable the button while loading
      >
        {loading ? (
          <RiLoader4Fill className="text-xl animate-spin" /> // Loader icon while loading
        ) : (
          <RiDeleteBin6Line className="text-xl" /> // Delete icon when not loading
        )}
      </button>
    </div>
  );
}

export default CartItem;
