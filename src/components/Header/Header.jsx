import { logo } from "../../assets";
import styles from "./header.module.css";
import { BsBell, BsSearch, BsArrowLeft, BsMicFill } from "react-icons/bs";
import { useState } from "react";

function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [inputText, setInputText] = useState("");

  const submitHanlder = (e) => {
    e.preventDefault();
    setSearchToggle(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles["logo__container"]}>
        <div className={styles["logo__img"]}>
          <img src={logo} alt={logo} />
        </div>
        <div className={styles["logo__text"]}>YouTube</div>
      </div>
      <div className={styles["icons"]}>
        <div className={styles.icon}>
          <BsBell />
        </div>
        <div className={styles.icon} onClick={() => setSearchToggle(true)}>
          <BsSearch />
        </div>
        <div className={[styles["user"], styles.icon].join(" ")}>
          <img src="https://velog.velcdn.com/images/ehdgus8054/profile/e54f9e7c-bd9e-4a24-8ae9-e5848d520381/image.jpg" alt="user img" />
        </div>
      </div>
      {searchToggle && (
        <div className={styles["search__container"]}>
          <div className={styles.icon} onClick={() => setSearchToggle(false)}>
            <BsArrowLeft />
          </div>
          <form className={styles["search__form"]} onSubmit={submitHanlder}>
            <input type="text" className={styles["search__input"]} value={inputText} onChange={(e) => setInputText(e.currentTarget.value)} placeholder="검색" />
          </form>
          <div className={styles.icon}>
            <BsMicFill />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
