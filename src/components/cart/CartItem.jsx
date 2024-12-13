import { useEffect, useState, useContext } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FormatPrice } from "../../utils/UtilMethods";
import Laptop from "../../assets/jpgs/lappy.jpg";
import { RiDeleteBin6Line } from "react-icons/ri"; // Importing delete icon
import { RiLoader4Fill } from "react-icons/ri"; // Importing loader icon
import { AuthenticationContext } from "../../context/AuthenticationContext";
import useCart from "../../hooks/useCart";

function CartItem({
  data,
  setSelectedItems,
  selectedItems,
  isAllChecked,
  setIsAllChecked,
}) {
  const { cartItems, removeItemsFromCartOnServer } = useCart(); // Importing the method to refresh cart
  const [isChecked, setIsChecked] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false); // Specific loader state

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

  // Update the checked state when `selectedItems` or `isAllChecked` change
  useEffect(() => {
    if (isAllChecked) {
      setIsChecked(true); // Mark all items as checked if "Select All" is true
    } else {
      const isFound = selectedItems?.some((current) => current?.cartsId === data?.cartsId);
      setIsChecked(isFound); // Check if this item is selected
    }
  }, [selectedItems, isAllChecked, data?.cartsId]);

  const handleRemoveItem = async () => {
    setIsRemoving(true); // Set individual loader state

    try {
      // Call server to remove item
      await removeItemsFromCartOnServer(data);

      // Remove from `selectedItems` if it exists
      const isItemSelected = selectedItems?.some(
        (item) => item?.cartsId === data?.cartsId
      );
      if (isItemSelected) {
        removeItemFromSelectedCart(); // Remove from selectedItems
      }
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    } finally {
      setIsRemoving(false); // Reset loader state
    }
  };

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
     {!isAllChecked && <button
        onClick={handleRemoveItem}
        className="text-red-500 hover:text-red-700 ml-3"
        disabled={isRemoving} // Disable the button while specific loading is active
      >
        {isRemoving ? (
          <RiLoader4Fill className="text-xl animate-spin" /> // Loader icon while loading
        ) : (
          <RiDeleteBin6Line className="text-xl" /> // Delete icon when not loading
        )}
      </button>}
    </div>
  );
}

export default CartItem;
