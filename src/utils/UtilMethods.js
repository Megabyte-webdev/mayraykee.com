export const handleOnChange = (e, setDetails) => {
  const { name, value } = e.target;

  setDetails((prev) => {
    return { ...prev, [name]: value };
  });
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`; // Add leading zero for single-digit seconds
};

export const highlightKeyword = (sentence, keyword) => {
  const regex = new RegExp(`\\b${keyword.name}\\b`, "gi");

  return sentence.replace(
    regex,
    `<span class="${keyword.color} font-bold cursor-pointer hover:underline ">${keyword.name}</span>`
  );
};

export const FormatPrice = (price) => {
  return `N${price.toLocaleString(navigator.language, {
    minmumFractionDigits: 0,
  })}`;
};
export const FormatNumber = (price) => {
  return `${price.toLocaleString(navigator.language, {
    minmumFractionDigits: 0,
  })}`;
};

export const FormatPriceInUsd = (price) => {
  return `USD ${price.toLocaleString(navigator.language, {
    minmumFractionDigits: 0,
  })}`;
};
