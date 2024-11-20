function ClassProgress({color, colorOpaque, text, score}) {
  return (
<<<<<<< HEAD
    <li className="w-60 px-[8px] py-[3px] flex items-center justify-center rounded-[5px] h-[70px] gap-[10px] bg-white">
=======
    <li className="w-[35%] px-[8px] py-[3px] flex items-center justify-center rounded-[5px] h-[70px] gap-[10px] bg-white">
>>>>>>> main
      <p className={`p-[5px] rounded-[50%] text-white font-semibold flex items-center justify-center text-sm h-[40px] w-[40px] ${colorOpaque}`}>{`${score*10}%`}</p>
      <div className="flex flex-col gap-[10px] px-[5px] text-small justify-between">
        <p className="font-semibold text-md">{text}</p>
        <progress value={score} max={10} className="progress-bar" />
      </div>
    </li>
  );
}

export default ClassProgress;
