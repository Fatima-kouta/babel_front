import React, { useEffect, useState } from "react";
import './footer.css';
import facebook  from "../../assets/images/footer/facebook.png";
import linkedin  from "../../assets/images/footer/linkedin.png";
import twitter  from "../../assets/images/footer/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (

    <footer className="text-light px-md-5 px-4 pt-md-4 pb-md-5"  >
        <div className="row ">
        <div className="col-lg-6 col-12   p-0  pt-md-0 pt-4" >
            <h6>مشاهدة توتير</h6>
<div className="d-flex justify-content-start pt-md-4 align-items-center flexrow">
<div className="d-flex  pt-2 pb-md-0 pb-3">
        <div className="ms-2">
        <Link to="/" ><img src={twitter} className="icons" alt="twitter"/></Link>

        </div>
        <div className="ms-2">
        <Link to="/" ><img src={facebook} className="icons" alt="facebook"/></Link>

        </div>
        <div>
    <Link to="/"  ><img src={linkedin} className="icons" alt="linkedin"/></Link>
    </div>
    </div>
      <div className="input-group mx-md-4 pt-md-4 mb-3 " dir="ltr">
        <input
          type="text"
          className="form-control signup-btn"
         
          aria-label="Search"
          aria-describedby="searchButton"
          dir="ltr"
        />
        <button className="btn btn-signup" type="button" id="searchButton">
         الاشتراك
        </button>
      </div>
 

    </div> 
         
    
     </div>
   {windowWidth>530&&  <div className="col-lg-6 col-12 d-flex justify-content-between p-0 ">
     <div className="">
     <h6> الاشتراك</h6>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
          </div>
          <div className="">
          <h6> الاشتراك</h6>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
          </div>
          <div className="">
            <h6> الاشتراك</h6>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>
            <Link to="/" className="footer-links"> هناك العديد من الانوع</Link>

          </div>
     </div>
}

          
        </div>
    </footer>
  );
};

export default Footer;
