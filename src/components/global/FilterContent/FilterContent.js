import FilterBox from "../FilterBox";
import style from "./filtercontent.module.scss";

const FilterContent = ({ title = "", data, filterType = "" }) => {
  return (
    <div className={style.wrapper}>
      <p className={style.title} id={title.replace(" ", "")}>
        {title}
      </p>
      <ul className={style.list}>
        {data.map((item, index) => (
          <li key={index}>
            <FilterBox
              title={title}
              value={item}
              id={index}
              type={filterType}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterContent;
