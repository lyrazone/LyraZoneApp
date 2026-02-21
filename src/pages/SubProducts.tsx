import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../assets/services.css";

const SubProducts: React.FC = () => {
  const [subProducts, setSubProducts] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const subCategoryId = params.get("id");

  useEffect(() => {
    console.log(subCategoryId);
    const fetchSubProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/subproducts/${subCategoryId}`
        );
        console.log(response.data.subProduct);
        setSubProducts(response.data.subProduct);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSubProduct();
  }, []);

  const productData = (barCode: any) => {
    console.log(barCode);
    window.location.href = `/singleproduct?barcode=${barCode}`;
  }

  return (
    <>
      <div id="home-p" className="home-p pages-head2 text-center">
        <div className="container">
          <h1 className="wow fadeInUp" data-wow-delay="0.1s">
            POINT OF SALE
          </h1>
          <p>HARDWARE SOLUTIONS</p>
        </div>
      </div>
      {/* <!--/end container--> */}

      <section id="business-growth-p1" className="business-growth-p1 bg-gray">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp">WEIGHING SCALE MACHINES</h1>
              <div className="heading-border"></div>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                We have been covering full range of Weighing Scale Machines with
                collection of reputed brands like Jadever, Optimuz, Aclas, Digi
                and Bizerba. Quality is our top most priority that's why we say
                <br />
                SUPER QUALITY HARDWARE.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="comp-offer">
        <div className="container-fluid">
          <div className="row">
            <h2>POS HARDWARE</h2>
            <div className="heading-border-light"></div>
            {/* <!----------------- P1 -----------------> */}
            {subProducts.map((subproduct: any, index: any) => (
              <div
                key={index}
                className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    {/* <div className="caption"> */}
                      <a onClick={() => productData(subproduct.barCode)}>
                        {/* <i className="fa fa-chain"></i> */}
                    <img
                      src={`src/assets/img/products/${subproduct.productImage}`}
                      className="img-fluid"
                      alt="...0 "
                    />
                      </a>
                    {/* </div> */}
                  </div>
                  <h3>{subproduct.productName}</h3>
                  <p className="desc">
                    Originated insect-proof loop design (patented) in the world.{" "}
                  </p>
                  {/* <a href="sp-pos-wsm-asclas-ls2615ec-label-digital-scale.html"><button align="right" className="btn btn-general btn-green" role="button">View Details</button></a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubProducts;
