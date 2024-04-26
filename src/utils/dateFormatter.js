export const formatISODate = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const options = {
    weekday: "long",
    hour: "numeric",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

export const formatISODateShort = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const options = {
    weekday: "short",
    hour: "numeric",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};
