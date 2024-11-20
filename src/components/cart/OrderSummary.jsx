import { useNavigate } from "react-router-dom";
import { FormatPrice } from "../../utils/UtilMethods";
import { onFailure } from "../../utils/notifications/OnFailure";
<<<<<<< HEAD
=======

>>>>>>> main
function OrderSummary({ data }) {
  const navigate = useNavigate();

  const getItems = () => {
<<<<<<< HEAD
=======
    console.log("Data", data);
>>>>>>> main
    if (data?.length === 0) {
      return <span className="text-small">Select Item for Checkout</span>;
    }
    return data?.map((currentItem, index) => (
<<<<<<< HEAD
      <li key={index} className="text-small text-black flex w-full justify-between">
        <h2>{currentItem?.title || currentItem?.name}</h2> {/* Ensure correct property */}
=======
      <li
        key={index}
        className="text-small text-black flex w-full justify-between"
      >
        <h2>{currentItem?.name}</h2>
>>>>>>> main
        <span>{FormatPrice(Number(currentItem?.price))}</span>
      </li>
    ));
  };
<<<<<<< HEAD
  
  const navigateToCheckoutPage = () => {
    if (!data || data.length === 0) {
      onFailure("Please select items");
      return;
    }

    let routeId = data.map((item) => `${item.id}-${item.title}`).join(",");
    navigate(`/dashboard/courses/checkout_session/${routeId}`, {
      state: { data },
=======

  const navigateToCheckoutPage = () => {
    if (data?.length === 0) {
      onFailure("Please select an items");
      return;
    }
    let routeId = "";

    data.map((currentCourse) => {
      routeId = `${routeId} ${currentCourse?.id} ${currentCourse?.title}`;
    });

    navigate(`/dashboard/courses/checkout_session/${routeId}`, {
      state: { data: data },
>>>>>>> main
    });
  };

  const getTotal = () => {
<<<<<<< HEAD
    return data?.reduce((acc, item) => acc + Number(item?.price || 0), 0) || 0;
  };

  return (
    <div className="md:w-[350px] min-h-60 border pt-[2%] px-[2%] flex flex-col gap-[5%] border-black bg-white">
      <h3 className="text-black font-semibold text-lg">ORDER SUMMARY</h3>

      <ul className="w-full flex flex-col pb-[10px] gap-[10px]">
=======
    let total = 0;

    data.map((currentItem) => (total = total + Number(currentItem?.price)));

    return total;
  };

  return (
    <div className="w-[28%] h-[350px] border pt-[2%] px-[2%] flex flex-col gap-[5%] border-black bg-white">
      <h3 className="text-black font-semibold  text-lg">ORDER SUMMARY</h3>

      <ul className="w-full flex flex-col  pb-[10px] gap-[10px]">
>>>>>>> main
        {getItems()}
      </ul>

      <div className="text-small text-black border-t flex items-center w-full justify-between">
        <h2>Grand Total</h2>
        <span className="text-lime-600 text-lg">{FormatPrice(getTotal())}</span>
      </div>

      <button
        onClick={navigateToCheckoutPage}
<<<<<<< HEAD
        className="mb-2 mt-auto w-[80%] rounded-[5px] hover:scale-105 duration-100 place-self-center py-[5px] text-white font-semibold text-sm bg-black"
=======
        className="w-[80%] rounded-[5px] hover:scale-105 duration-100 place-self-center py-[5px] text-white font-semibold text-sm bg-black"
>>>>>>> main
      >
        Checkout
      </button>
    </div>
  );
}

<<<<<<< HEAD

=======
>>>>>>> main
export default OrderSummary;
