import React from "react";
import styles from "../assets/styles/Buttons.module.css";
const Buttons = ({ handleOnClick }) => {
  const keys = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnbox}>
      {keys.map((keyName) => {
        return (
          <button
            className={styles.btn}
            onClick={() => {
              handleOnClick(keyName);
            }}
          >
            {keyName}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
