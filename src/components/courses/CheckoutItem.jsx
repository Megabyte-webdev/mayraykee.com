import { FormatPrice } from "../../utils/UtilMethods";

function ChecoutItem({data}) {
  return (
    <div className="w-full border-b flex gap-[10px] py-[10px] items-center">
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

export default ChecoutItem;
