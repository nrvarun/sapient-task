import style from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <h1 className={`fnt-700 text-capitalize ${style.title}`}>
        SpaceEx launch programs
      </h1>
    </header>
  );
};

export default Header;
