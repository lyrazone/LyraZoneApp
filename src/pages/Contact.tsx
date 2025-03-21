import React, { useState } from "react";
import "../assets/style.css";
import "../assets/contact.css";

const Contact: React.FC = () => {

    const [formData, setFormData] = useState({
        CoName: "",
        CoEmail: "",
        CoSubject: "",
        CoMessage: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setFormData({ CoName: "", CoEmail: "", CoSubject: "", CoMessage: "" }); // Reset form
      };

  return (
    <>
      {/* ====================================================
                       HOME-P
        ====================================================== */}

      <div id="home-p" className="home-p pages-head4 text-center">
        <div className="container">
          {/* <h1 className="wow fadeInUp" data-wow-delay="0.1s">Contact Us</h1>  */}
        </div>
        {/* <!--/end container--> */}
      </div>

      <section id="contact-p1" className="contact-p1">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-p1-cont">
                <h3>Contact our experienced team</h3>
                <div className="heading-border-light"></div>
              </div>
              <p>
                It’s confirmed that you would be inspired by the marketing of
                pictorial and text contents of any website when you find any
                technical solution on the internet.
                <br />
                <br />
                Don't worry, we are here and you are about to reveal your
                technical problem by filling in the following details and
                pressing the send button. Please don't waste your time and take
                an opinion from our experienced team.
              </p>
              <a
                href="https://wa.me/+60149936302?text=Hi,%0ADear Valued Customer!%0ANow you are connected with Lyra Zone Support Team%0AHow may I help you?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-general btn-silver" role="button">
                  WhatsApp Now
                </button>
              </a>
            </div>
            <div className="col-md-4">
              <div className="contact-p1-cont2">
                <address className="address-details-f">
                  No. 3, Level 3,
                  <br />
                  Plaza City One, Jalan Munshi Abdullah
                  <br />
                  50100 Kuala Lumpur, Malaysia.
                  <br />
                  Phone: +60 14 993 6302 <br />
                  Email:{" "}
                  <a href="mailto:support@lyrazone.com.my">
                    support@lyrazone.com.my
                  </a>
                </address>
                <ul className="list-inline social-icon-f top-data">
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i
                        className="fa top-social fa-facebook"
                        style={{ height: 35, width: 35, lineHeight: "35px" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i
                        className="fa top-social fa-twitter"
                        style={{ height: 35, width: 35, lineHeight: "35px" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i
                        className="fa top-social fa-google-plus"
                        style={{ height: 35, width: 35, lineHeight: "35px" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-p2" id="contact-p2">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row con-form">
            <div className="col-md-4">
              <input
                type="text"
                name="CoName"
                id="CoName"
                placeholder="Full Name"
                className="form-control"
                value={formData.CoName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                name="CoEmail"
                id="CoEmail"
                placeholder="Email Id"
                className="form-control"
                value={formData.CoEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="CoSubject"
                id="CoSubject"
                placeholder="Subject"
                className="form-control"
                value={formData.CoSubject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <textarea
                className="form-control"
                id="CoMessage"
                name="CoMessage"
                placeholder="Your Message"
                value={formData.CoMessage}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12 sub-but">
              <button className="btn btn-general btn-silver" type="submit">
                Submit Your Enquiry
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63740.29204260978!2d101.66291187910156!3d3.1557026999999946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49ff4fef7ef5%3A0x5286e166a66ec1a0!2sMenara%20City%20One%20Condominiums!5e0!3m2!1sen!2smy!4v1632671340429!5m2!1sen!2smy" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy"
      ></iframe>
    </div>

    </>
  );
};

export default Contact;
