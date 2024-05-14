function NameTag({initials, initialsBackground, name, extraText}) {
  return (
    <div className="flex gap-[10px] items-center">
      <p className={`p-[8px] rounded-[5px] tracking-wide ${initialsBackground} flex items-center justify-center text-white font-semibold text-small `}>{initials}</p>
      <p className="font-bold text-gray-700 text-small flex gap-[5px]">{name}<span className="text-gray-400 font-normal">{extraText}</span></p>
    </div>
  );
}

export default NameTag;
