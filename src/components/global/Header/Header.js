import style from "./header.module.scss";

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className={style.content}>
        <Link href="/" as="/">
          <a>
            <h1
              data-test-id="logo"
              className={`fnt-700 text-capitalize ${style.title}`}
            >
              SpaceEx launch programs
            </h1>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
