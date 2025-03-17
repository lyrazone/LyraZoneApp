import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom"; // If using React Router
import axios from "axios";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [data, setData] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    country: "",
    city: "",
    phone: "",
    address: "",
  });
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [] = useState([]);
  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      console.log("Fetching data with token:", token);
      const response = await axios.get(
        `http://localhost:5000/api/userdata/${token}`
      );
      console.log(response.data.userData[0]);
      sessionStorage.setItem("userdata", JSON.stringify(response.data.userData[0]));
      setData(response.data.userData[0]);
      setFormData(response.data.userData[0]);
    } catch (err) {
      // setError('Failed to fetch data');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    try {
      const token = sessionStorage.getItem("token");
      console.log(token);
      const response = await axios.put(
        `http://localhost:5000/api/updateuser/${token}`,
        formData
      );
      console.log(response.data.message);
      alert(response.data.message);
    } catch (err) {
      console.error(err);
    }
    // You can now send `formData` via API
  };

  return (
    <div className="page-content d-flex align-items-stretch">
      <Sidebar />
      {/* ***** SIDE NAVBAR ***** */}
      {/* <nav className="side-navbar">
        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar">
            <img
              src="images/users/avatar-1.jpg"
              alt="User Avatar"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="title">
            <h1 className="h4">Steena Ben</h1>
          </div>
        </div>
        <hr />
        <ul className="list-unstyled">
          <li>
            <Link to="/">
              <i className="icon-home"></i>Home
            </Link>
          </li>
          <li>
            <a href="#apps" data-toggle="collapse" aria-expanded="false">
              <i className="icon-interface-windows"></i> Apps
            </a>
            <ul id="apps" className="collapse list-unstyled">
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/email">Email</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/invoice">Invoice</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/chart">
              <i className="fa fa-bar-chart"></i>Chart
            </Link>
          </li>
          <li>
            <a href="#forms" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-building-o"></i> Forms
            </a>
            <ul id="forms" className="collapse list-unstyled">
              <li>
                <Link to="/basic-form">Basic Form</Link>
              </li>
              <li>
                <Link to="/form-layouts">Form Layouts</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/maps">
              <i className="fa fa-map-o"></i>Maps
            </Link>
          </li>
          <li>
            <a href="#pages" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-file-o"></i> Pages
            </a>
            <ul id="pages" className="collapse list-unstyled">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/empty">Empty</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/search-result">Search Result</Link>
              </li>
              <li>
                <Link to="/404">404</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/tables">
              <i className="icon-grid"></i>Tables
            </Link>
          </li>
          <li>
            <a href="#elements" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-globe"></i> UI Elements
            </a>
            <ul id="elements" className="collapse list-unstyled">
              <li>
                <Link to="/ui-buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/ui-cards">Cards</Link>
              </li>
              <li>
                <Link to="/ui-progressbars">Progress Bars</Link>
              </li>
              <li>
                <Link to="/ui-timeline">Timeline</Link>
              </li>
            </ul>
          </li>
        </ul>
        <span className="heading">Extras</span>
        <ul className="list-unstyled">
          <li>
            <a href="#">
              <i className="icon-picture"></i> Demo
            </a>
          </li>
          </ul>
          </nav> */}

      {/* ***** MAIN CONTENT ***** */}
      {data ? (
        <div className="content-inner chart-cont">
          <div className="row mt-2" id="card-prof">
            {/* User Card */}
            <div className="col-md-3">
              <div className="card hovercard">
                <div className="cardheader"></div>
                <div className="avatar">
                  <img
                    alt="User"
                    src={`../src/admin/assets/img/users/${data.user_image}`}
                    className="img-fluid"
                  />
                </div>
                <div className="info">
                  <div className="title">
                    <a href="#">{data.name}</a>
                  </div>
                  <div className="desc">{data.email}</div>
                  <hr />
                </div>
                <nav className="nav text-center prof-nav">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className={`nav-link ${
                          activeTab === "profile" ? "active" : ""
                        }`}
                        onClick={() => {
                          fetchData();
                          setActiveTab("profile");
                        }}
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className={`nav-link ${
                          activeTab === "inbox" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("inbox")}
                      >
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a
                        className={`nav-link ${
                          activeTab === "settings" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("settings")}
                      >
                        Setting
                      </a>
                    </li>
                    <li>
                      <Link to="/login">Logout</Link>
                    </li>
                  </ul>
                </nav>
                <div className="bottom">
                  <a className="btn btn-info btn-sm" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a className="btn btn-danger btn-sm" href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a className="btn btn-primary btn-sm" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Tabs */}
            <div className="col-md-9">
              <div className="card hovercard">
                <div className="tab" role="tabpanel">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "profile" ? "active" : ""
                        }`}
                        onClick={() => {
                          fetchData();
                          setActiveTab("profile");
                        }}
                      >
                        <i className="fa fa-user"></i> Profile
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "inbox" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("inbox")}
                      >
                        <i className="fa fa-inbox"></i> Inbox
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "settings" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("settings")}
                      >
                        <i className="fa fa-cog"></i> Settings
                      </button>
                    </li>
                  </ul>

                  {/* Tab Content */}
                  <div className="tab-content">
                    {activeTab === "profile" && (
                      <div className="tab-pane fade show active">
                        <p>
                          {data.address === "" ||
                          data.country === "" ||
                          data.city === ""
                            ? "Kindly Complete Your Profile."
                            : "Your Profile is completed"}
                          .{" "}
                        </p>
                        <div className="row" id="report4">
                          <div className="col-md-4">
                            <div className="card text-center social-bottom sb-fb">
                              <i className="fa fa-facebook"></i>
                              <div>3250 +</div>
                              <p>Likes</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card text-center social-bottom sb-tw">
                              <i className="fa fa-twitter"></i>
                              <div>2345 +</div>
                              <p>Following</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card text-center social-bottom sb-gp">
                              <i className="fa fa-google-plus"></i>
                              <div>1253 +</div>
                              <p>Followers</p>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <h5 className="col-12 mb-2">User Info</h5>
                          <div className="col-6">
                            <div className="form-group">
                              <strong className="mr-5">
                                <i className="fa fa-envelope"> E-mail: </i>
                              </strong>{" "}
                              {data.email}
                            </div>
                            <div className="form-group">
                              <strong className="mr-5">
                                <i className="fa fa-phone"> Phone: </i>
                              </strong>{" "}
                              {data.phone}
                            </div>
                            <div className="form-group">
                              <strong className="mr-5">
                                <i className="fa fa-map"> City: </i>
                              </strong>{" "}
                              {data.city !== "" ? data.city : "NA"}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group">
                              <strong className="mr-5">
                                <i className="fa fa-globe"> Country: </i>
                              </strong>{" "}
                              {data.country !== "" ? data.country : "NA"}
                            </div>
                            <div className="form-group">
                              <strong className="mr-5">
                                <i className="fa fa-map-marker"> Address: </i>
                              </strong>{" "}
                              {data.address !== "" ? data.address : "NA"}
                            </div>
                            <div className="form-group">
                              <strong className="mr-5">
                                <i className="fa fa-globe"> Company: </i>
                              </strong>{" "}
                              {data.company_name}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "inbox" && (
                      <div className="panel panel-default widget">
                        <div className="panel-heading">
                          <h3 className="panel-title">
                            <i className="fa fa-comment"></i> Messages
                          </h3>
                        </div>
                        <div className="panel-body">
                          <ul className="list-group">
                            <li className="list-group-item">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src="/images/users/avatar-2.jpg"
                                    className="img-circle img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className=" col-md-10">
                                  <div>
                                    <a href="#">Congratulations</a>
                                    <div className="mic-info">
                                      By: <a href="#">Check My Athletics</a> on
                                      12 Jun 2018
                                    </div>
                                  </div>
                                  <div className="comment-text">
                                    We would like to congratulate John on his
                                    achievement...
                                  </div>
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-hover btn-primary"
                                  />
                                  <a href="#reply" />
                                  <span
                                    className="fa fa-share-alt"
                                    style={{ paddingRight: "3px;" }}
                                  />
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-hover btn-danger"
                                  >
                                    <span
                                      className="fa fa-remove"
                                      style={{ paddingRight: "3px;" }}
                                    ></span>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src="images/users/avatar-3.jpg"
                                    className="img-circle img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className=" col-md-10">
                                  <div>
                                    <a href="#">Great Job</a>
                                    <div className="mic-info">
                                      By: <a href="#">Coacher</a> on 11 May 2018
                                    </div>
                                  </div>
                                  <div className="comment-text">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src="images/users/avatar-2.jpg"
                                    className="img-circle img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className=" col-md-10">
                                  <div>
                                    <a href="#">Great Job</a>
                                    <div className="mic-info">
                                      By: <a href="#">Coacher</a> on 11 May 2018
                                    </div>
                                  </div>
                                  <div className="comment-text">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeTab === "settings" && (
                      <form onSubmit={handleUpdate}>
                        <div className="tab-pane fade show active">
                          <div className="row mx-2">
                            <div className="col-md-12 panel-heading">
                              <h3 className="panel-title">
                                <i className="fa fa-comment"></i> Edit Info
                              </h3>{" "}
                              <br />
                            </div>
                            <div className="col-md-6 ">
                              <div className="form-group row">
                                <label
                                  htmlFor="example-email-input"
                                  style={{ width: "85px" }}
                                  className=" col-form-label"
                                >
                                  Name
                                </label>
                                <div className="col-9">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  htmlFor="example-email-input"
                                  style={{ width: "85px" }}
                                  className=" col-form-label"
                                >
                                  Email
                                </label>
                                <div className="col-9">
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  htmlFor="example-url-input"
                                  style={{ width: "85px" }}
                                  className=" col-form-label"
                                >
                                  Company
                                </label>
                                <div className="col-9">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group row">
                                <label
                                  htmlFor="example-text-input"
                                  style={{ width: "85px" }}
                                  className=" col-form-label"
                                >
                                  Country
                                </label>
                                <div className="col-9">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  htmlFor="example-date-input"
                                  style={{ width: "85px" }}
                                  className=" col-form-label"
                                >
                                  City
                                </label>
                                <div className="col-9">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  htmlFor="example-tel-input"
                                  style={{ width: "85px" }}
                                  className=" col-form-label"
                                >
                                  Phone
                                </label>
                                <div className="col-9">
                                  <input
                                    className="form-control"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group row">
                                <label
                                  htmlFor="example-text-input"
                                  style={{ width: "85px" }}
                                  className=" col-form-label"
                                >
                                  Address
                                </label>
                                <div className="col-9">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button type="submit" >
                                <img
                                  src="../src/admin/assets/img/save.png"
                                  alt="Save"
                                  style={{ width: "24px", height: "24px" }}
                                />
                              </button>
                              {/* <button type="submit" className="btn btn-primary">
                                Save Changes
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
