import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = () => {
    const {t, i18n} = useTranslation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        // <header className="header">
        //   <div className="flex flex-row justify-between mx-0.5 p-5">
        //     <div className="flex flex-row justify-around">
        //       <div className="me-2">
        //         <Link to="/">{t("header.home")}</Link>
        //       </div>
        //       <div className="me-2">
        //         <Link to="/products">{t("header.store")}</Link>
        //       </div>
        //       <div className="">
        //         <Link to="/login">{t("header.login")}</Link>
        //       </div>
        //     </div>
        //     <Link to='/'><div className="">𝓔-𝓒𝓞𝓜𝓜𝓔𝓡𝓒𝓔</div></Link>
        //     <div className="flex flex-row">
        //       <button className="ms-2" onClick={() => changeLanguage("en")}>English</button>
        //       <button className="ms-2" onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
        //     </div>
        //   </div>
        // </header>

        <header className="header">
            <div className="flex justify-between p-5">
                {/* Logo Section */}
                <Link to="/" className="text-2xl font-bold">
                    𝓔-𝓒𝓞𝓜𝓜𝓔𝓡𝓒𝓔
                </Link>

                {/* Nav Links for large screens */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/">{t("header.home")}</Link>
                    <Link to="/products">{t("header.store")}</Link>
                    <Link to="/login">{t("header.login")}</Link>
                </div>

                {/* Language Switcher */}
                <div className="flex space-x-2">
                    <button onClick={() => changeLanguage("en")}>English</button>
                    <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
                </div>

                {/* Hamburger Icon for small screens */}
                <button
                    className="block md:hidden"
                    onClick={toggleDrawer}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Drawer for small screens */}
                <div
                    className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform ${
                        isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className="p-4 flex justify-between items-center border-b">
                        <span className="text-xl font-bold">Menu</span>
                        <button onClick={toggleDrawer}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="p-4 space-y-6 flex flex-col">
                        <Link to="/" onClick={toggleDrawer}>
                            {t("header.home")}
                        </Link>
                        <Link to="/products" onClick={toggleDrawer}>
                            {t("header.store")}
                        </Link>
                        <Link to="/login" onClick={toggleDrawer}>
                            {t("header.login")}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
