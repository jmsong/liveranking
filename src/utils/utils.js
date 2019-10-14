import { useEffect, useRef } from "react";

export const formatNumber = (num, delimiter) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + delimiter);
};

export const usePrevious = value => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
