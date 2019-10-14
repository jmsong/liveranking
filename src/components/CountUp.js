import { useState } from "react";
import { animate, usePrevious, formatNumber } from "../utils";

export function CountUp(props) {
  const [endValue, setEndValue] = useState(props.endValue);
  const prevEndValue = usePrevious(props.endValue);
  if (props.endValue !== prevEndValue) {
    animate({
      start: prevEndValue,
      end: props.endValue,
      duration: props.duration,
      doAction: value => {
        setEndValue(value);
      }
    });
  }

  return formatNumber(endValue, ",");
}

export default CountUp;
