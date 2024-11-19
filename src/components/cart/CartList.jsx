import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import CartItem from "./CartItem";

function CartList({ selectedItems, setSelectedItems, cartItems }) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleIsAllChecked = () => setIsAllChecked(!isAllChecked);

  const getCartItems = () => {
    if (cartItems?.length === 0) {
      return <span className="text-gray-500 text-sm">No items in the cart.</span>;
    }
    return cartItems.map((currentItem, index) => (
      <CartItem
        key={index}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        data={currentItem}
      />
    ));
  };

  const addAllItemsToCart = () => {
    if (cartItems?.length === 0) {
      return;
    }
    cartItems.forEach((currentItem) => {
      const isFound = selectedItems?.some(
        (current) => current?.cartsId === currentItem?.cartsId
      );
      if (!isFound) {
        setSelectedItems((prev) => [...prev, currentItem]);
      }
    });
    toggleIsAllChecked();
  };

  const removeAllItemsFromCart = () => {
    setSelectedItems([]);
    toggleIsAllChecked();
  };

  return (
    <div className="w-full">
      {/* Select All Section */}
      <div className="py-2 border-y flex items-center gap-2">
        {isAllChecked ? (
          <IoCheckbox
            onClick={removeAllItemsFromCart}
            className="text-lg cursor-pointer text-[#4cbc9a]"
          />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            onClick={addAllItemsToCart}
            className="text-lg cursor-pointer"
          />
        )}
        <span className="text-sm text-gray-700">Select All</span>
      </div>

      {/* Cart Items List */}
      <ul className="flex flex-col gap-2 pb-4">{getCartItems()}</ul>
    </div>
  );
}

export default CartList;
