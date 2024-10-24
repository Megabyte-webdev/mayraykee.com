import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import CartItem from "./CartItem";
import { cartDummy } from "../../utils/dashboard/dummys";
function CartList({ selectedItems, setSelectedItems, cartItems }) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toogleIsAllChecked = () => setIsAllChecked(!isAllChecked);

  const getCartItems = () => {
    if(cartItems?.length == 0){
      return
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
  };

  return (
    <div className="w-full">
      <div className="py-[10px] border-y gap-[10px] flex justify-start">
        {isAllChecked ? (
          <IoCheckbox
            onClick={removeAllItemsToCart}
            className="text-lg cursor-pointer text-[#4cbc9a] "
          />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            onClick={addAllItemsToCart}
            className="text-lg cursor-pointer"
          />
        )}
        <span className="text-small">Select All</span>
      </div>

      <ul className="flex flex-col pb-[10px] ">{getCartItems()}</ul>
    </div>
  );
}

export default CartList;
