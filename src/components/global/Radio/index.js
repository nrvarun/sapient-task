import { useEffect, useRef } from "react";
import style from "./radio.module.scss";

export const Radio = ({ title, value, type, setFilter }) => {
  const handleChange = (e) => {
    console.log("did it change");
    setFilter(e);
  };

  return (
    <label
      htmlFor={`${title.replace(" ", "")}${value}`}
      aria-label={`${title.replace(" ", "")}Filter`}
      className={style.label}
    >
      <input
        onChange={handleChange}
        aria-checked={"false"}
        value={value}
        role="radio"
        type={type}
        name={title.replace(" ", "")}
        id={`${title.replace(" ", "")}${value}`}
      />
      <span>{value}</span>
    </label>
  );
};

export const RadioGroup = ({ children, classList, activeItem }) => {
  const radioListRef = useRef(null);

  useEffect(() => {
    if (activeItem !== null) {
      const activeRadioItem = radioListRef.current.querySelector(
        `input[value='${activeItem}']`
      );
      activeRadioItem.checked = true;
    } else {
      const radioItems = radioListRef.current.querySelectorAll(
        "input[type='radio']"
      );

      radioItems.forEach((radio) => {
        console.log((radio.checked = false));
      });
    }
  }, [activeItem]);

  return (
    <ul className={`${classList}`} role="radiogroup" ref={radioListRef}>
      {children}
    </ul>
  );
};
