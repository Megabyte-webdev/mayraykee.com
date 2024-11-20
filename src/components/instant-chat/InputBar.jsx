<<<<<<< HEAD
import { FaPlus } from "react-icons/fa6"; 
import { IoSend } from "react-icons/io5";  // Importing the send icon

function InputBar() {
  return (
    <div className="w-full flex items-center gap-4 px-4 py-2 sticky bottom-0 bg-white border border-gray-300 rounded-full shadow-lg">
      {/* Icon Button */}
      <FaPlus className="text-gray-700 text-xl cursor-pointer" />

      {/* Input Field */}
      <input
        className="w-full h-10 px-4 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Type Something...."
      />

      {/* Send Button with Send Icon */}
      <button className="bg-green-500 text-white h-10 w-20 rounded-full flex items-center justify-center hover:scale-105 transition duration-200">
        <IoSend className="text-white text-lg" /> {/* Send icon inside the button */}
      </button>
=======
import { FaPlus } from "react-icons/fa6";

function InputBar() {
  return (
    <div className="w-full flex px-[3%] items-center gap-[3%] absolute rounded-[30px] border border-gray-300 py-[5px] bg-white bottom-0">
      <FaPlus className="text-[14px] text-gray-800 cursor-pointer" />

      <input
        className="w-[80%] focus:outline-none text-small text-center"
        placeholder="Type Something...."
      />
      <button className="w-[20%] bg-green text-white h-[30px] rounded-[30px] hover:scale-105 duration-75">Send</button>
>>>>>>> main
    </div>
  );
}

export default InputBar;
