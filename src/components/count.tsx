"use client";
import CountUp, { CountUpProps } from "react-countup";

const Count = ({ end, ...rest }: CountUpProps) => {
  return <CountUp {...rest} start={0} end={end} duration={2.75} />;
};

export default Count;
