import React, { useEffect, useState } from "react";
import "./Categories.css"; // Import the CSS file
import news from "../../assets/images/Categories/news.jpeg";
import economie from "../../assets/images/Categories/economie.jpeg";
import videos from "../../assets/images/Categories/images and videos.jpeg";
import sport from "../../assets/images/Categories/sport.jpeg";
import culture from "../../assets/images/Categories/culture.jpeg";

import axios from "axios";

const Categories = ({ categoriesClickedlas24hrs, targetDivRef }) => {
  const handleClick = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/save-clicks",
        {
          id: id,
        }
      );

      console.log("Item added:", response.data);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return categoriesClickedlas24hrs.length == 0 ? null : (
    <div className="card-container pt-4" ref={targetDivRef}>
      {categoriesClickedlas24hrs
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 1)
        .map((catg) => (
          <div className="card">
            <img
              src={
                catg.category.name == "رياضة"
                  ? sport
                  : catg.category.name == "ثقافة"
                  ? culture
                  : catg.category.name == "أخبار"
                  ? news
                  : catg.category.name == "اقتصاد"
                  ? economie
                  : catg.category.name == "فيديو وصور" && videos
              }
              alt="Image 1"
            />
            <div className="card-body pt-0">
              <h5 className="card-title card-categ">{catg.category.name}</h5>
              <button
                className="btn-more bg-btn-green  mt-1"
                onClick={() => handleClick(catg.category.id)}
              >
                المزيد
              </button>
            </div>
          </div>
        ))}
      {categoriesClickedlas24hrs
        .sort((a, b) => b.clicks - a.clicks)
        .slice(1, 5)
        .map((catg) => (
          <div className="card">
            <img
              src={
                catg.category.name == "رياضة"
                  ? sport
                  : catg.category.name == "ثقافة"
                  ? culture
                  : catg.category.name == "أخبار"
                  ? news
                  : catg.category.name == "اقتصاد"
                  ? economie
                  : catg.category.name == "فيديو وصور" && videos
              }
              alt="Image 1"
            />
            <div className="card-body pt-0">
              <h5 className="card-title card-categ">{catg.category.name}</h5>
              <button
                className="btn-more bg-btn-green  mt-1"
                onClick={() => handleClick(catg.category.id)}
              >
                المزيد
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Categories;
