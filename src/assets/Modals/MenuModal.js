import x from "../../assets/images/X.png";
import babelLogo from "../../assets/images/babelLogo.png";

import { Modal } from "react-bootstrap";
import "./login.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MenuModal({ categoriesClickedlas24hrs, show, setShow }) {
  const handleClick = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/save-clicks",
        {
          id: id,
        }
      );
      console.log("Item added:", response.data);
      setShow(false);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  return (
    <Modal show={show} size="md" className="modal fade" fullscreen centered>
      <Modal.Body className="p-0 m-0 bg-menu-modal">
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

        <div className="modal-body pt-0 bg-menu-modal">
          {/* <div className="text-center ">
            <img src={babelLogo} alt="logo" className="img-fluid logo-modal" />
          </div> */}
          <div className="container px-3  ">
            {categoriesClickedlas24hrs.map((catg) => (
              <div
                className="border-menu w-100 pt-3 pb-3"
                key={catg.clicks}
                onClick={() => handleClick(catg.category.id) & setShow(false)}
              >
                <a href={`#${catg.category.id}`} className="menu-modal">
                  {catg.category.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MenuModal;
