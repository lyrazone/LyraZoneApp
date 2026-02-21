import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../assets/style.css";
// import "../assets/services.css";
import LatestNews from "./LatestNews";
import ContactSection from "./ContactSection";
import WhatWeDo from "./WhatWeDo";
import ProductList from "./ProductList";

const Hardware: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [subcategoryId, setSubcategoryId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/categories");
        console.log(response.data.categories);
        setCategories(response.data.categories);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);

  useEffect(() => {
    const fetchSubcategoryId = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/subcategoryId");
        console.log(response.data.subcategoryId);
        // localStorage.setItem("products", JSON.stringify(response.data.subcategoryId));
        setSubcategoryId(response.data.subcategoryId);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSubcategoryId(); // Call the async function inside useEffect
  }, []);

  const groupedCategories = categories.reduce((acc, category) => {
    if (!acc[category.category_name]) {
      acc[category.category_name] = [];
    }
    acc[category.category_name].push(category);
    return acc;
  }, {});

  const productData = (subCategoryId: any) => {
    console.log(subCategoryId);
    const filteredsubcategoryId = subcategoryId.filter((obj: any) => obj.subcategoryId === subCategoryId);
    console.log(filteredsubcategoryId);
    if (filteredsubcategoryId.length > 1) {
      window.location.href = `/subproducts?id=${subCategoryId}`;
    } else if (filteredsubcategoryId.length === 1) {
      console.log(filteredsubcategoryId);
      window.location.href = `/singleproduct?barcode=${filteredsubcategoryId[0].barCode}`;
    } else {
      alert("No Product Found");
    }
  }

  return (
    <>
      {/* ====================================================
                       HOME-P
====================================================== */}

      <div id="home-p" className="home-p pages-head7 text-center">
        <div className="container">
          {/* <h1 className="wow fadeInUp" data-wow-delay="0.1s">Lyra Zone is fully equiped with ICT Tools</h1> 
         <p>HARDWARE SOLUTIONS</p>  */}
        </div>
        {/* /end container */}
      </div>

      {/* ====================================================
                      BUSINESS-GROWTH-P1
====================================================== */}

      <section id="business-growth-p1" className="business-growth-p1 bg-gray">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp">SUPER QUALITY HARDWARE</h1>
              <div className="heading-border"></div>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                We are a leading zone of Information & Communication Technology
                (ICT). We deal and New and Used both type of ICT Hardware.
                Quality is our top most priority that's why we say SUPER QUALITY
                HARDWARE.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="comp-offer">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2>Products</h2>
              <div className="heading-border-light"></div>
            </div>
            {products.map((product, index) => (
              <div
                key={index}
                className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    <div className="caption">
                      <a href="/singleproduct">
                        <i className="fa fa-chain"></i>
                      </a>
                    </div>
                    <img
                      src={`src/assets/img/products/${product.image}`}
                      className="img-fluid"
                      alt={product.name}
                    />
                  </div>
                  <h3>{product.name}</h3>
                  <p className="desc">{product.description}</p>
                  <a
                    href={`https://wa.me/+60149936302?text=${product.whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="btn btn-general btn-silver"
                      role="button"
                    >
                      WhatsApp Now
                    </button>
                  </a>
                </div>
              </div>
          ))}
          </div>
        </div>
      </section> */}
      
      <section id="comp-offer">
  <div className="container-fluid">
    <div className="row">
      {Object.entries(groupedCategories).map(([category, items], catIndex) => (
        <React.Fragment key={catIndex}>

          <div
            className="col-md-12 desc-comp-offer wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2>{category}</h2>
            <div className="heading-border-light"></div>
          </div>

          {items.map((subCategory: any, index: any) => (
            <div
              key={index}
              className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
              data-wow-delay="0.4s"
              >
              <div className="desc-comp-offer-cont">
                <div className="thumbnail-blogs">
                  {/* <div className="caption"> */}
                    <a onClick={() => productData(subCategory.id)} >
                      {/* href="/singleproduct" */}
                    <img
                    src={`src/assets/img/products/${subCategory.image}`}
                    className="img-fluid"
                    alt={subCategory.name}
                    />
                      {/* <i className="fa fa-chain"></i> */}
                    </a>
                  {/* </div> */}
                  
                </div>
                <h3>{subCategory.name}</h3>
                <p className="desc">{subCategory.description}</p>
                <a
                  href={`https://wa.me/+60149936302?text=${subCategory.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-general btn-silver" role="button">
                    WhatsApp Now
                  </button>
                </a>
              </div>
            </div>
          ))}
       </React.Fragment>
      ))}
    </div>
  </div>
</section>


      <WhatWeDo />
      <ContactSection />
      <LatestNews />
    </>
  );
};

const FinancialContent: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="financial-p1-cont">
    <a href="#">
      {" "}
      <b>Richtech Technology</b>
    </a>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="btn btn-general btn-white" role="button">
      Contact Us
    </button>
  </div>
);

export default Hardware;
