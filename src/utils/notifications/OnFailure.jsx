import { toast } from "react-toastify";
import { MdCancel} from "react-icons/md";

export const onFailure = (message) => {
  const failureComponent = (
    <div className="flex items-center text-red-500 gap-[10px]">
      <MdCancel className="text-[25px] " />
      <div className="flex flex-col">
       <strong className="text-[14px] ">Success Message</strong>
       <p className="text-small ">{message}</p>
      </div>
       
    </div>
  );

  toast(failureComponent);
};
