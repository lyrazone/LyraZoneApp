import React from "react";
import "../assets/style.css";
import "../assets/services.css";
import LatestNews from "./LatestNews";
import ContactSection from "./ContactSection";
import WhatWeDo from "./WhatWeDo";

const Hardware: React.FC = () => {

    const products = [
        {
          title: "POS Terminals",
          image: "src/assets/img/products/pos-1.jpg",
          link: "pos-terminals.html",
          description: "Here you can get New and Used POS Terminal; For listing click on Chain and to Chat with us Click WhatsApp.",
          whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in POS Terminal."
        },
        {
          title: "Cash Drawer USB",
          image: "src/assets/img/products/cd-1/cd-1.jpg",
          link: "sp-pos-h2.html",
          description: "Posiflex CR 3000 Series Cash Drawer - USB with 5 Bills / 8 Coins (Metal Wire Grips); For details click on Chain Icon or WhatsApp Now to chat with us.",
          whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in 410 USB Cash Drawer - USB Connection."
        },
        {
            title: "Flip Top Cash Drawer",
            image: "src/assets/img/products/ft-1/ft-1.jpg",
            link: "sp-pos-h3.html",
            description: "POS Flip Top Cash Drawer ECD-460 (RJ 11 Connection); to get more details click on Chain Icon or WhatsApp Now to chat with us. ",
            whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in POS Terminal."
          },
          {
            title: "Cash Drawer USB",
            image: "img/products/cd-1/cd-1.jpg",
            link: "sp-pos-h2.html",
            description: "Posiflex CR 3000 Series Cash Drawer - USB with 5 Bills / 8 Coins (Metal Wire Grips); For details click on Chain Icon or WhatsApp Now to chat with us.",
            whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in 410 USB Cash Drawer - USB Connection."
          },
          {
            title: "POS Terminals",
            image: "img/products/pos-1.jpg",
            link: "pos-terminals.html",
            description: "Here you can get New and Used POS Terminal; For listing click on Chain and to Chat with us Click WhatsApp.",
            whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in POS Terminal."
          },
          {
            title: "Cash Drawer USB",
            image: "img/products/cd-1/cd-1.jpg",
            link: "sp-pos-h2.html",
            description: "Posiflex CR 3000 Series Cash Drawer - USB with 5 Bills / 8 Coins (Metal Wire Grips); For details click on Chain Icon or WhatsApp Now to chat with us.",
            whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in 410 USB Cash Drawer - USB Connection."
          },
          {
            title: "POS Terminals",
            image: "img/products/pos-1.jpg",
            link: "pos-terminals.html",
            description: "Here you can get New and Used POS Terminal; For listing click on Chain and to Chat with us Click WhatsApp.",
            whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in POS Terminal."
          },
          {
            title: "Cash Drawer USB",
            image: "img/products/cd-1/cd-1.jpg",
            link: "sp-pos-h2.html",
            description: "Posiflex CR 3000 Series Cash Drawer - USB with 5 Bills / 8 Coins (Metal Wire Grips); For details click on Chain Icon or WhatsApp Now to chat with us.",
            whatsappMessage: "Hi,%0ALyra Zone Sales Rep!%0AI am interested in 410 USB Cash Drawer - USB Connection."
          },
        // Add more products as needed
      ];

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

      <section id="comp-offer">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.2s">
          <h2>POS HARDWARE</h2>
          <div className="heading-border-light"></div>
        </div>
        {products.map((product, index) => (
          <div key={index} className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.4s">
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <a href={product.link}><i className="fa fa-chain"></i></a>
                </div>
                <img src={product.image} className="img-fluid" alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p className="desc">{product.description}</p>
              <a href={`https://wa.me/+60149936302?text=${product.whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-general btn-silver" role="button">WhatsApp Now</button>
              </a>
            </div>
          </div>
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
