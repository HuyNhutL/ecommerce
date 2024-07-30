import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="flex flex-row justify-between mx-0.5 p-5">
        <div className="flex flex-row justify-around">
          <div className="me-2">
            <Link to="/">{t("header.home")}</Link>
          </div>
          <div className="me-2">
            <Link to="/products">{t("header.store")}</Link>
          </div>
          <div className="me-2">
            <Link to="/about">{t("header.about")}</Link>
          </div>
          <div className="">
            <Link to="/login">{t("header.login")}</Link>
          </div>
        </div>
        <Link to='/'><div className="">𝓔-𝓒𝓞𝓜𝓜𝓔𝓡𝓒𝓔</div></Link>
        <div className="flex flex-row">
          <button className="ms-2" onClick={() => changeLanguage("en")}>English</button>
          <button className="ms-2" onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
