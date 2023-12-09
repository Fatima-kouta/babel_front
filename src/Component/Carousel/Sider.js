import React, { useEffect, useState } from "react";
import carousel0 from "../../assets/images/Carousel/carousel0.png";
import carousel2 from "../../assets/images/Carousel/carousel2.webp";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Sider = ({ categories, targetDivRef }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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

  const handleClick = async (category) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/save-clicks",
        {
          id: category.id,
        }
      );
      console.log("Item added:", response.data);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const scrollToDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({
        behavior: "smooth", // Optional: animated smooth scroll
      });
    }
  };
  return (
    <div>
      <div className="image-overlay-container">
        {windowWidth > 768 && (
          <div className="top-menu">
            <div className="d-flex justify-content-center ">
              <div className="menu-size">
                <Link to="/" className="menu">
                  الرءيسية
                </Link>
              </div>
              {categories.map((catg) => (
                <div
                  className="menu-size"
                  key={catg.id}
                  onClick={() => handleClick(catg) & scrollToDiv()}
                >
                  <a href={`#${catg.name}`} className="menu">
                    {catg.name}
                  </a>
                </div>
              ))}
              <div className="menu-size-border0">
                <Link to="/" className="menu">
                  اراء
                </Link>
              </div>
            </div>
          </div>
        )}
        <Carousel
          className="  carousel-banner w-100 justify-content-center d-flex"
          interval={2000}
        >
          <Carousel.Item className="containerimage">
            <div className={` p-0 m-0  placeholder-imagecarousel `}>
              <img src={carousel2} alt="news " className="img-fluid w-100" />
              <div className="text-block ">
                <div className="slider-title">خلافا للاعتقاد</div>
                <div className="slider-desc pt-md-3 pt-1 w-75 ">
                  وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                  الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                  لوريم إيبسوم ولايزال المعيار للنص الشكلي
                </div>
                <div className="mt-3">
                  <Link to="/" className="btn-carousel  btn-more">
                    المزيد
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="containerimage">
            <div className={` p-0 m-0  placeholder-imagecarousel `}>
              <img src={carousel0} alt="news " className="img-fluid w-100" />

              <div className="text-block ">
                <div className="slider-title">2 خلافا للاعتقاد</div>
                <div className="slider-desc pt-md-3 pt-1 w-75 ">
                  وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                  الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                  لوريم إيبسوم ولايزال المعيار للنص الشكلي
                </div>
                <div className="mt-3">
                  <Link to="/" className="btn-carousel  btn-more">
                    المزيد
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Sider;
