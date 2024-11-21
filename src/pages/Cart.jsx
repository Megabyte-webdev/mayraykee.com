import { useState } from "react";
import CartList from "../components/cart/CartList";
import OrderSummary from "../components/cart/OrderSummary";
import RelatedCourses from "../components/courses/RelatedCourses";
import { Helmet } from 'react-helmet'
import useCart from "../hooks/useCart";


function Cart() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { cartItems } = useCart()

  return (
    <section className="w-full px-[2%] pt-[10px] h-fit overflow-y-auto pb-[20px] flex flex-col gap-[25px]">
      <Helmet>
        <title>Mayrahkee - Africa | Cart</title>
      </Helmet>
      <div className="w-[45%] flex items-end">
        <button className="w-[30%] border-b-2 text-sm text-[#4cbc9a] border-b-[#4cbc9a] pb-[5px]">
          Shopping Cart
        </button>
        <hr className="w-[70%] h-[2px] border-0 bg-gray-300" />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-[5%] justify-start">
        <div className="flex flex-col w-full md:w-2/3 gap-[15px]">
          <h2 className="text-black text-sm">Showing 3 products you added</h2>
          <CartList
            cartItems={cartItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
        <OrderSummary data={selectedItems} className="md:w-1/4" />
      </div>


      <RelatedCourses />

    </section>
  );
}

export default Cart;
