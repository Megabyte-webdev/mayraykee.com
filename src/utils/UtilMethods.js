export const handleOnChange = (e, setDetails) => {
  const { name, value } = e.target;

  setDetails((prev) => {
    return { ...prev, [name]: value };
  });
};


export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`; // Add leading zero for single-digit seconds
}