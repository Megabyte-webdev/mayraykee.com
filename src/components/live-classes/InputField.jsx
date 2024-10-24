import { GoPaperclip } from "react-icons/go";
import SendFile from '../../assets/pngs/send-file.png'

function InputField() {
    return ( <div className="w-full px-[8%] items-center justify-between flex h-[50px] bg-white">
        <GoPaperclip className="text-xl hover:scale-105 duration-100 cursor-pointer"/>
        <input className="text-sm w-[75%] h-full text-center focus:outline-0" placeholder="Type something..." />
        <img src={SendFile} className="h-[20px] cursor-pointer hover:scale-105 duration-100"/>
    </div> );
}

export default InputField;