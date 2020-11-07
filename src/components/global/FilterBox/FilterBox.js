import style from "./filterbox.module.scss";

const FilterBox = ({ title, value, type }) => {
  return (
    <label
      htmlFor={`${title.replace(" ", "")}${value}`}
      aria-label={`${title.replace(" ", "")}Filter`}
      className={style.label}
    >
      <input
        type={type}
        name={title.replace(" ", "")}
        id={`${title.replace(" ", "")}${value}`}
      />
      <span>{value}</span>
    </label>
  );
};

export default FilterBox;
