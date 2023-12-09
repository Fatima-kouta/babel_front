import { useEffect, useState } from "react";
import Login from "../assets/Modals/Login";
import logo from "../assets/images/babelLogo.png";
import "../Component/Navbar.css";
import axios from "axios";
import MenuModal from "../assets/Modals/MenuModal";

const NavbarComp = ({ categoriesClickedlas24hrs }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);
  const storedToken = localStorage.getItem("token");
  const [usertoken, setUserToken] = useState(storedToken);
  const [windowWidth, setWindowWidth] = useState(320);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth, windowWidth]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth, windowWidth]);
  async function logout() {
    try {
      const token = localStorage.getItem("token");
      setUserToken(token);
      console.log("usertoken", usertoken);
      const response = await axios.post(
        "http://localhost:8000/api/auth/logout",
        null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usertoken}`,
          },
        }
      );
      if (response.data.message) {
        localStorage.removeItem("token");
        setUserToken("");
      }
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  }
  useEffect(() => {
    setUserToken(storedToken);
  }, [storedToken]);

  return (
    <>
      <div className="show-modal-auth">
        {show && <Login show={show} setShow={setShow} />}
        {showMenu && (
          <MenuModal
            categoriesClickedlas24hrs={categoriesClickedlas24hrs}
            show={showMenu}
            setShow={setShowMenu}
          />
        )}
      </div>

      <nav className="px-md-0 px-1 pb-md-4 pt-md-0 pb-2 pt-2">
        <div
          id="login"
          className="col-4 p-0 align-items-end d-flex"
          style={{ cursor: "pointer" }}
          onClick={() => setShowMenu(true)}
        >
          {windowWidth < 768 && <div id="burger-menu">&#9776;</div>}
        </div>
        <a
          href="#"
          id="logo"
          className="col-4 justify-content-center d-flex p-0"
        >
          <div className=" text-center">
            <div className="image-container">
              <img src={logo} alt="Logo" className="logo img-fluid" />
              <div className="overlay-text">الاخبار المحلية</div>
            </div>
          </div>
        </a>

        {usertoken == null ? (
          <button
            className="col-4 p-0 authentication-text justify-content-end align-items-end d-flex"
            onClick={() => setShow(true)}
          >
            تسجيل الدخول
          </button>
        ) : (
          <button
            className="col-4 p-0 authentication-text justify-content-end  align-items-end d-flex"
            onClick={() => logout()}
          >
            تسجيل الخروج
          </button>
        )}
      </nav>
    </>
  );
};

export default NavbarComp;
