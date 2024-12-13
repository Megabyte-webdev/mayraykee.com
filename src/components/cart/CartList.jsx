import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { RiDeleteBin6Line, RiLoader4Fill } from "react-icons/ri"; // Combined imports
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import CartItem from "./CartItem";
import useCart from "../../hooks/useCart";

function CartList({ selectedItems = [], setSelectedItems, cartItems = [] }) {
  const { removeItemsFromCartOnServer } = useCart();
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const toggleIsAllChecked = () => setIsAllChecked(!isAllChecked);
  const handleRemoveSelectedItems = async () => {
    if (selectedItems.length === 0) return;
  
    try {
      setIsRemoving(true);
      await removeItemsFromCartOnServer(selectedItems)
      setSelectedItems([]); // Clear selected items after removal
      setIsAllChecked(false); // Uncheck "Select All"
    } catch (error) {
      console.error("Failed to remove selected items:", error);
    } finally {
      setIsRemoving(false);
    }
  };
  

  const addAllItemsToCart = () => {
    cartItems.forEach((item) => {
      if (!selectedItems.some((selected) => selected.cartsId === item.cartsId)) {
        setSelectedItems((prev) => [...prev, item]);
      }
    });
    setIsAllChecked(true);
  };

  const removeAllItemsFromCart = () => {
    setSelectedItems([]);
    setIsAllChecked(false);
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <span className="text-gray-500 text-sm">No items in the cart.</span>;
    }

    return cartItems.map((item) => (
      <CartItem
        key={item.cartsId} // Use a unique identifier instead of index
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        data={item}
      />
    ));
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
        <span className="text-sm text-gray-700">Select All ({selectedItems?.length})</span>
        {isAllChecked && (
          <button
            onClick={handleRemoveSelectedItems}
            className="ml-auto text-red-500 hover:text-red-700"
            disabled={selectedItems.length === 0}
          >
            {isRemoving ? (
              <RiLoader4Fill className="text-xl animate-spin" />
            ) : (
              <RiDeleteBin6Line className="text-xl" />
            )}
          </button>
        )}
      </div>

      {/* Cart Items List */}
      <ul className="flex flex-col gap-2 pb-4">{renderCartItems()}</ul>
    </div>
  );
}

export default CartList;
