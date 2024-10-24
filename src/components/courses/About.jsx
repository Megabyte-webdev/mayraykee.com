function About({ data }) {
  console.log(data);
  return (
    <div className="w-full items-start justify-center flex flex-col ">
      <h2 className="font-bold text-lg text-gray-700">About Course</h2>
      {data?.description && <p className="text-sm text-gray-400 gap-[5px]">{data?.description}</p>}
      {!data?.description && <p className="text-sm text-gray-400">Opps.. nothing to display</p>}
    </div>
  );
}

export default About;
