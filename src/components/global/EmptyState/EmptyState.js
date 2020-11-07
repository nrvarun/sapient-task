import style from "./emptystate.module.scss";

const EmptyState = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <img src="./empty.svg" alt="empty" className={style.illustration} />
        <p>No Result found</p>
      </div>
    </div>
  );
};

export default EmptyState;
