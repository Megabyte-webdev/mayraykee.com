function Outline({ data }) {
  return (
    <div className="w-full items-start justify-center flex flex-col ">
      <h2 className="font-bold text-lg text-gray-700">Course Outlines</h2>
      {data?.outlines &&  <div className='text-gray-600 flex flex-col text-sm gap-[5px]' dangerouslySetInnerHTML={{ __html: data?.outlines }} />}
      {!data?.outlines && (
        <p className="text-sm text-gray-400">Opps.. nothing to display</p>
      )}
    </div>
  );
}

export default Outline;
