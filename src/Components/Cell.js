import React from "react";
import { persianNumbers } from "../Utility/Persian";
const cell = props => {
  let persianText = props.children ? persianNumbers(props.children) : "";
  return <td className={props.className}>{persianText}</td>;
};
export default cell;
