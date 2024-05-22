import { useEffect, useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FormatPrice } from "../../utils/UtilMethods";

function CartItem({ data, setSelectedItems, selectedItems, isAllChecked, setIsAllChecked }) {
  const [isChecked, setIsChecked] = useState(false);

  const toogleIsChecked = () => setIsChecked(!isChecked);

  const addItemToCart = () => {
    const isFound = selectedItems?.filter((current) => current.id === data.id);
    console.log(isFound);
    if (typeof isFound === "undefined" || isFound?.length === 0) {
      setSelectedItems((prev) => [...prev, data]);
    }
    toogleIsChecked();
  };

  const removeItemFromCart = () => {
    const isNotFound = selectedItems?.filter((current) => current.id !== data.id);
    console.log(isNotFound);
   
      setSelectedItems((prev) => [...isNotFound]);
  
    toogleIsChecked();
    setIsAllChecked(false);
  };


  useEffect(() => {
    console.log(selectedItems);
    if(isAllChecked){
        setIsChecked(true)
    } else {
        const isFound = selectedItems?.filter((current) => current.id === data.id);
        console.log(isFound);
        if (typeof isFound === "undefined" || isFound?.length === 0) {
          setIsChecked(false)
        }
    }
  }, [selectedItems, isAllChecked]);

  return (
    <div className="w-full border-b flex gap-[10px] py-[10px] items-center">
      {isChecked ? (
        <IoCheckbox
          onClick={removeItemFromCart}
          className="text-xl cursor-pointer text-[#4cbc9a] "
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          onClick={addItemToCart}
          className="text-xl cursor-pointer"
        />
      )}
      <img className="h-[100px] w-[100px] bg-gray-400" src={data?.thumbnail} />
      <div className="flex flex-col">
        <h3 className="font-bold text-md">{data?.name}</h3>
        <p className="text-small text-amber-500">
          {FormatPrice(Number(data?.price))}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
