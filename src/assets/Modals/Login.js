import x from "../../assets/images/X.png";
import babelLogo from "../../assets/images/babelLogo.png";

import { Modal } from "react-bootstrap";
import "./login.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Login({ show, setShow }) {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const login = async () => {
    try {
      setLoading(true); // Set loading to true when the login process starts
      let item = { email, password };
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        JSON.stringify(item),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.error) {
        console.log("error", response.data.error);
      } else {
        localStorage.setItem("token", response.data.access_token);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    } finally {
      setLoading(false); // Set loading to false when the login process completes (whether success or failure)
      setShow(false);
    }
  };

  return (
    <Modal show={show} size="md" className="modal fade  travelmode" centered>
      <Modal.Body className="p-0 m-0 ">
        <div className="modal-header border-0 pb-0  justify-content-end">
          <button
            type="button"
            className="close close-modal 0"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setShow(false)}
          >
            <img src={x} className="x-close" />
          </button>
        </div>

        <div className="modal-body pt-0">
          <div className="text-center ">
            <img src={babelLogo} alt="logo" className="img-fluid logo-modal" />
          </div>
          <div className="container px-md-5">
            <div className="text">تسجيل الدخول</div>
            <div className="mb-md-3 mt-md-3 mt-2 mb-2" dir="ltr">
              <label
                for="exampleInputEmail1"
                className="form-label login-label"
              >
                عنوان البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className="form-control form-signin"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3" dir="ltr">
              <label
                for="exampleInputPassword1"
                className="form-label login-label"
              >
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                placeholder="كلمة المرور"
                className="form-control form-signin"
                id="exampleInputPassword1"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center pb-3" dir="ltr">
              <button onClick={() => login()} className="btn-login btn-more">
                {loading ? " ...تسجيل الدخول" : " تسجيل الدخول"}
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
