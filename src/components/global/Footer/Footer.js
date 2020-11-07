import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <p className={style.title}>
        Developed by: <span>Varun N R</span>
      </p>
    </footer>
  );
};

export default Footer;
