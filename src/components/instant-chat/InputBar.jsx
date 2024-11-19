import { FaPlus } from "react-icons/fa6";

function InputBar() {
  return (
    <div className="absolute bottom-0 left-0 w-full flex px-[3%] items-center gap-[3%] rounded-[30px] border border-gray-300 py-[5px] bg-white">
      <FaPlus className="text-[14px] text-gray-800 cursor-pointer" />

      <input
        className="w-[80%] focus:outline-none text-small text-center"
        placeholder="Type Something...."
      />
      <button className="w-[20%] bg-green text-white h-[30px] rounded-[30px] hover:scale-105 duration-75">
        Send
      </button>
    </div>
  );
}
export default InputBar;