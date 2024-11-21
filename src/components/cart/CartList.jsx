import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import CartItem from "./CartItem";
<<<<<<< HEAD

function CartList({ selectedItems, setSelectedItems, cartItems }) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleIsAllChecked = () => setIsAllChecked(!isAllChecked);

  const getCartItems = () => {
    if (cartItems?.length === 0) {
      return <span className="text-gray-500 text-sm">No items in the cart.</span>;
=======
import { cartDummy } from "../../utils/dashboard/dummys";
function CartList({ selectedItems, setSelectedItems, cartItems }) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toogleIsAllChecked = () => setIsAllChecked(!isAllChecked);

  const getCartItems = () => {
    if(cartItems?.length == 0){
      return
>>>>>>> main
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
<<<<<<< HEAD
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
=======
    if(cartItems?.length == 0){
      return
    }
    cartItems.map((currentItem) => {
      const isFound = selectedItems?.filter(
        (current) => current?.cartsId === currentItem?.cartsId
      );
      console.log(isFound);
      if (typeof isFound === "undefined" || isFound?.length === 0) {
        setSelectedItems((prev) => [...prev, currentItem]);
      }
    });
    toogleIsAllChecked();
  };

  const removeAllItemsToCart = () => {
    setSelectedItems([]);
    toogleIsAllChecked();
>>>>>>> main
  };

  return (
    <div className="w-full">
<<<<<<< HEAD
      {/* Select All Section */}
      <div className="py-2 border-y flex items-center gap-2">
        {isAllChecked ? (
          <IoCheckbox
            onClick={removeAllItemsFromCart}
            className="text-lg cursor-pointer text-[#4cbc9a]"
=======
      <div className="py-[10px] border-y gap-[10px] flex justify-start">
        {isAllChecked ? (
          <IoCheckbox
            onClick={removeAllItemsToCart}
            className="text-lg cursor-pointer text-[#4cbc9a] "
>>>>>>> main
          />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            onClick={addAllItemsToCart}
            className="text-lg cursor-pointer"
          />
        )}
<<<<<<< HEAD
        <span className="text-sm text-gray-700">Select All</span>
      </div>

      {/* Cart Items List */}
      <ul className="flex flex-col gap-2 pb-4">{getCartItems()}</ul>
=======
        <span className="text-small">Select All</span>
      </div>

      <ul className="flex flex-col pb-[10px] ">{getCartItems()}</ul>
>>>>>>> main
    </div>
  );
}

export default CartList;
