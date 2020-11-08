import { Radio, RadioGroup } from "../Radio";
import style from "./filtercontent.module.scss";

const FilterContent = ({
  title = "",
  data,
  filterType = "",
  handleFilterChange,
  selectedValue,
}) => {
  const handleFilter = (e) => {
    const { name, value } = e.target;

    handleFilterChange(name, value);
  };

  return (
    <div className={style.wrapper}>
      <p className={style.title} id={title.replace(" ", "")}>
        {title}
      </p>
      <RadioGroup classList={style.list} activeItem={selectedValue}>
        {data.map((item, index) => (
          <li key={index}>
            <Radio
              title={title}
              value={item}
              id={index}
              type={filterType}
              setFilter={handleFilter}
            />
          </li>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterContent;
