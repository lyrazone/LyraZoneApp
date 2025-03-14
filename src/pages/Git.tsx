import React, { useState } from "react";
import "../assets/contact.css";

const Git: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="overlay-contact-h"></div>

      <section id="contact-h" className="bg-parallax contact-h-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-h-cont">
                <h2 className="cl-white" style={{ textAlign: "center" }}>
                  Get In Touch
                </h2>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-group cl-white">
                    {/* <label htmlFor="name">Your Name</label> */}
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group cl-white">
                    {/* <label htmlFor="email">Email Address</label> */}
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="form-group cl-white">
                    {/* <label htmlFor="mobile">Mobile Number</label> */}
                    <input
                      type="number"
                      className="form-control"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Your mobile number"
                      required
                    />
                  </div>
                  <div className="form-group cl-white">
                    {/* <label htmlFor="subject">Subject</label> */}
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                  <div className="form-group cl-white">
                    {/* <label htmlFor="message">Message</label> */}
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <button className="btn btn-general btn-silver" type="submit">
                    SYNC UP NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Git;
