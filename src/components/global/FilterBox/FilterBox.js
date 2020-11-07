import style from "./filterbox.module.scss";

const FilterBox = ({ title, value, type, setFilter }) => {
  const handleChange = (e) => setFilter(e);

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

export default FilterBox;
