import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../assets/style.css";
import "../assets/single-product.css";
import "../assets/shop.css";

const SingleProduct: React.FC = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const barcode = params.get("barcode");

  useEffect(() => {
    console.log(barcode);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/singleproducts/${barcode}`
        );
        console.log(response.data.singleProduct[0]);
        setProduct(response.data.singleProduct[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, []);
  console.log(product.productImage);
  const productImage = product.productImage || "";
  const images = productImage.split(", ").map((img, index) => img.trim());

  return (
    <>
      <div id="home-p" className="home-p pages-head3 text-center">
        <div className="container">
          <h1 className="wow fadeInUp" data-wow-delay="0.1s">
            Product Details
          </h1>
        </div>
        {/* <!--/end container--> */}
      </div>

      <section id="single-product-p1">
        <div className="container">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div
                className="zoom"
                style={{ maxWidth: "100%", height: "auto" }}
              >
                <div className="preview-pic tab-content">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`tab-pane ${index === 0 ? "active" : ""}`}
                      id={`pic-${index + 1}`}
                    >
                      <img
                        src={`src/assets/img/products/${img}`}
                        alt={`Product ${index + 1}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                {images.map((img, index) => (
                  <li key={index} className={index === 0 ? "active" : ""}>
                    <a data-target={`#pic-${index + 1}`} data-toggle="tab">
                      <img
                        src={`src/assets/img/products/${img}`}
                        alt={`Thumbnail ${index + 1}`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{product.productName}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">4 reviews</span>
              </div>
              <p className="product-description">{product.shortDescription}</p>
              <h4 className="price">
                current price: <span>{product.price1}</span>
              </h4>
              <p className="vote">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>
              {/* <h5 className="sizes">
                sizes:
                <span className="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span className="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span className="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span className="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5> */}
              <h5 className="colors">colors: {product.color}</h5>
              {/* <div className="action">
                <div className="title-but">
                  <button className="btn btn-general btn-white" role="button">
                    <i className="fa fa-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div> */}
            </div>
            <div className="col-md-12">
              <div className="service-h-tab">
                <nav className="nav nav-tabs" id="myTab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-expanded="true"
                  >
                    Reviews
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                  >
                    Desciption
                  </a>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="review-block">
                      <div className="row">
                        <div className=" col-sm-3">
                          <img
                            src="img/client/avatar-3.jpg"
                            className="img-rounded"
                          />
                          <div className="review-block-name">
                            <a href="#">Nktailor</a>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="rating">
                            <div className="stars">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </div>
                          </div>
                          <div className="review-block-title">
                            this was nice in buy
                          </div>
                          <div className="review-block-description">
                            this was nice in buy. this was nice in buy. this was
                            nice in buy. this was nice in buy this was nice in
                            buy this was nice in buy this was nice in buy this
                            was nice in buy
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-block">
                      <div className="row">
                        <div className="col-sm-3">
                          <img
                            src="img/client/avatar-1.jpg"
                            className="img-rounded"
                          />
                          <div className="review-block-name">
                            <a href="#">Nktailor</a>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="rating">
                            <div className="stars">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </div>
                          </div>
                          <div className="review-block-title">
                            this was nice in buy
                          </div>
                          <div className="review-block-description">
                            this was nice in buy. this was nice in buy. this was
                            nice in buy. this was nice in buy this was nice in
                            buy this was nice in buy this was nice in buy this
                            was nice in buy
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-block">
                      <div className="row">
                        <div className="col-sm-3">
                          <img
                            src="img/client/avatar-2.jpg"
                            className="img-rounded"
                          />
                          <div className="review-block-name">
                            <a href="#">Nktailor</a>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="rating">
                            <div className="stars">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </div>
                          </div>
                          <div className="review-block-title">
                            this was nice in buy
                          </div>
                          <div className="review-block-description">
                            this was nice in buy. this was nice in buy. this was
                            nice in buy. this was nice in buy this was nice in
                            buy this was nice in buy this was nice in buy this
                            was nice in buy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <p>
                      <ul>
                        <li>
                          <strong>Brand :</strong> Optimuz
                        </li>
                        <li>
                          <strong>Model : </strong>PT9090
                        </li>
                        <li>
                          <strong>Function : </strong>Hi-Tech POS Terminal
                        </li>
                        <li>
                          <strong>Interface : </strong>Touch Dual Screen Front
                          15" Back 12"
                        </li>
                        <li>
                          <strong>Material : </strong>Plastic and steel{" "}
                        </li>
                        <li>
                          <strong>Accessories : </strong>On screen mouse
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
