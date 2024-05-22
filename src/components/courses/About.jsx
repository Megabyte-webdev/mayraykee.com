function About({ data }) {
  console.log(data);
  return (
    <div className="w-full items-start justify-center flex flex-col ">
      <h2 className="font-bold text-lg text-gray-700">About Course</h2>
      <p className="text-sm ">{data}</p>
    </div>
  );
}

export default About;
