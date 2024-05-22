import { Link, useLocation } from 'react-router-dom';
import Todo from '../assets/pngs/todo-list-checked.png'
import PaymentStatus from '../components/courses/PaymentStatus';

function CoursePayment() {

    const location = useLocation()

    const checkoutCourses = location?.state?.data
    

  return (
    <section className="w-full flex justify-between  items-start h-[90%]  py-[2%] px-[2%]">
      <div className="flex flex-col w-[45%] gap-[35px]">
        <div className="w-full flex items-end mt-[5%] flex-[5%]">
          <button className="w-[65%] border-b-2 text-lg font-semibold text-[#4cbc9a] border-b-[#4cbc9a] pb-[5px]">
            Payment Confirmation Successful
          </button>
          <hr className="w-[35%] h-[2px] border-0 bg-gray-300" />
        </div>

        <p className="text-small text-gray-400"> 
          Thank you for choosing to book with My More Travels ! Your Reservation
          is Confirmed. If there's anything you need before your arrival, please
          don't hesitate to reach out to your host!
        </p>
        <span className='flex gap-[10px] text-sm font-semibold items-center'><img className='h-[20px]' src={Todo} alt="" />Order id : MMT786636612 </span>
        <Link to='/' className='border-b w-fit text-sm hover:scale-105 duration-100 hover:text-green border-black font-tnormal'>Go Back to Home</Link>
      </div>
        <PaymentStatus checkoutCourses={checkoutCourses}/>
    </section>
  );
}

export default CoursePayment;
