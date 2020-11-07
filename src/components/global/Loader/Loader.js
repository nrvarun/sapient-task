import style from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={style.wrapper}>
      <img src="./loader.gif" alt="loader" />
      <p style={{ textAlign: "center" }}>Loading...</p>
    </div>
  );
};

export default Loader;
