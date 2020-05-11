import React from "react";
import s from "./JsonDebug.module.css";

export interface IJsonDebugProps {
  v?: any;
  stringify?: boolean;
  variant?: "minimal" | "full";
}

export const JsonDebug: React.FC<IJsonDebugProps> = (props) => {
  console.log("s", s);

  return <pre className={s.test}>{JSON.stringify(props.v)}</pre>;
};
