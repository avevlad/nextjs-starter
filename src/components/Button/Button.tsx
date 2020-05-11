import React from "react";
import s from "./Button.module.scss";

export interface IButtonProps {
  foo: boolean;
  bar: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  // console.log("s", s);
  return <div className={s.test}>{props.children}</div>;
};
