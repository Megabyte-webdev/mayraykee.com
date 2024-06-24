function Objectives({ data }) {
  return (
    <div className="w-full items-start justify-center flex flex-col">
      <h2 className="font-bold text-lg text-gray-700">Course Objective</h2>
      <div className="overflow-y-auto">
        {data?.objective && (
          <div
            className="text-gray-600  flex flex-col text-sm gap-[5px]"
            dangerouslySetInnerHTML={{ __html: data?.objective }}
          />
        )}
      </div>
      {!data?.objective && (
        <p className="text-sm text-gray-400">Opps.. nothing to display</p>
      )}
    </div>
  );
}

export default Objectives;
