import style from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={style.content}>
        <h1 className={`fnt-700 text-capitalize ${style.title}`}>
          SpaceEx launch programs
        </h1>
      </div>
    </header>
  );
};

export default Header;
