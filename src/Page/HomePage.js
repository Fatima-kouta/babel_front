import { useEffect, useRef, useState } from "react";
import Slider from "../Component/Carousel/Sider";
import Categories from "../Component/Categories/Categories";
import Faqsection from "../Component/FaqSection/Faqsection";
import NavbarComp from "../Component/NavbarComp";
import Footer from "../Component/Shared/Footer";
import axios from "axios";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [categoriesClickedlas24hrs, setCategoriesClickedlas24hrs] = useState(
    []
  );
  const [loading, setLoading] = useState(true);
  const targetDivRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //total clicks count
        const totalclicks = await axios.get(
          "http://localhost:8000/api/total-count"
        );
        console.log("totalclicks", totalclicks.data);
        // Fetch categories
        const categoriesResponse = await axios.get(
          "http://localhost:8000/api/categories"
        );
        const categoriesData = categoriesResponse.data;
        setCategories(categoriesData);

        // Fetch clicks for the last 24 hours
        const clicksResponse = await axios.get(
          "http://localhost:8000/api/clicks-for-categories-last-24-hours"
        );
        const clicksData = clicksResponse.data;
        // Process the data and update state
        const updatedCategoriesClickedlas24hrs = [];

        for (let catg of categoriesData) {
          let found = false;

          for (let catgclick of clicksData) {
            if (catgclick.category.name === catg.name) {
              updatedCategoriesClickedlas24hrs.push(catgclick);
              found = true;
              break;
            }
          }

          if (!found) {
            updatedCategoriesClickedlas24hrs.push({
              category: catg,
              clicks: 0,
            });
          }
        }

        setCategoriesClickedlas24hrs(updatedCategoriesClickedlas24hrs);
        setLoading(false); // Move setLoading inside the try block to ensure it gets executed
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="row mx-0 bg-homepage">
        <div className="col-12 px-0 h-100 justify-content-center align-items-center d-flex">
          <div className="center-box ">
            <div className="  paddingbox ">
              <NavbarComp
                categoriesClickedlas24hrs={categoriesClickedlas24hrs}
              />

              <Slider categories={categories} targetDivRef={targetDivRef} />
              <div className="px-md-0 px-4">
                <Categories
                  categoriesClickedlas24hrs={categoriesClickedlas24hrs}
                  targetDivRef={targetDivRef}
                />
                <hr />
                <Faqsection />
              </div>

              <hr />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
