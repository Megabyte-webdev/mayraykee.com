import { useEffect, useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FormatPrice } from "../../utils/UtilMethods";
import Laptop from "../../assets/jpgs/lappy.jpg";

function CartItem({
  data,
  setSelectedItems,
  selectedItems,
  isAllChecked,
  setIsAllChecked,
}) {
  const [isChecked, setIsChecked] = useState(false);

  // Toggle checked state
  const toggleIsChecked = () => setIsChecked(!isChecked);

  // Add item to the selected cart
  const addItemToCart = () => {
    // Check if item is already selected
    const isFound = selectedItems?.some((current) => current?.cartsId === data?.cartsId);
    if (!isFound) {
      setSelectedItems((prev) => [...prev, data]);
    }
    toggleIsChecked();
  };

  // Remove item from the selected cart
  const removeItemFromCart = () => {
    setSelectedItems((prev) =>
      prev.filter((current) => current?.cartsId !== data?.cartsId)
    );
    toggleIsChecked();
    setIsAllChecked(false); // Reset the "Select All" state if item is removed
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
          onClick={removeItemFromCart}
          className="text-xl cursor-pointer text-[#4cbc9a]"
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          onClick={addItemToCart}
          className="text-xl cursor-pointer"
        />
      )}
      <img className="h-[100px] w-[100px] bg-gray-400" src={Laptop} alt="Product" />
      <div className="flex flex-col">
        <h3 className="font-bold text-md">{data?.title}</h3>
        <p className="text-small text-amber-500">{FormatPrice(Number(data?.price))}</p>
      </div>
    </div>
  );
}

export default CartItem;
