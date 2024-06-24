import Spinner from "./Spinner";
function FormBotton({ children, loading, onClick }) {
  return onClick ? (
    <button
      onClick={onClick}
      className={`text-small ${
        !loading
          ? "hover:text-[13px] hover:scale-105 duration-75"
          : "hover:text-small hover:scale-100 duration-75"
      } relative  w-full font-semibold text-white bg-green h-[45px]  rounded-md`}
    >
      {children}
      {loading && <Spinner />}
    </button>
  ) : (
    <button
      type="submit"
      className={`text-small ${
        !loading
          ? "hover:text-[13px] hover:scale-105 duration-75"
          : "hover:text-small hover:scale-100 duration-75"
      } relative  w-full font-semibold text-white bg-green h-[45px]  rounded-md`}
    >
      {children}
      {loading && <Spinner />}
    </button>
  );
}

export default FormBotton;
