import { toast } from "react-toastify";
import { MdCheckCircle } from "react-icons/md";

export const onSuccess = (message) => {
  const successComponent = (
    <div className="flex items-center gap-[10px]">
      <MdCheckCircle className="text-[25px] text-green" />
      <div className="flex flex-col">
       <strong className="text-[14px] text-green">Success Message</strong>
       <p className="text-small text-green">{message}</p>
      </div>
       
    </div>
  );

  toast(successComponent);
};
