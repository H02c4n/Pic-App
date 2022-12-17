export const getClass = (i) => {
  if (i % 4 === 0) {
    return "big";
  } else if (i % 7 === 0) {
    return "wide";
  }
};
