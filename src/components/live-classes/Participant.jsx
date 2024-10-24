import WomanBaby from "../../assets/pngs/woman-with-baby.png";
import Mic from "../../assets/pngs/mic-black.png";
import Camera from "../../assets/pngs/camera-red.png";


function Participant({ data }) {
  return (
    <li className="w-full h-[25px] rounded-[30px] flex justify-end relative bg-lime-700/30">
      <img
        src={data?.profileImg}
        className="h-[120%] rounded-full absolute left-0 top-[-3px]"
      />
      <div className="w-[80%] flex items-center justify-between">
        <span className="text-small">{data?.name}</span>
        <div className="flex gap-[10px] px-[15px]">
          <img src={Mic} className="h-[12px]" />
          <img src={Camera} className="h-[12px]" />
        </div>
      </div>
    </li>
  );
}

export default Participant;
