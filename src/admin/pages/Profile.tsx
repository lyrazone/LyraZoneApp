import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");

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
      <div className="content-inner chart-cont">
        <div className="row mt-2" id="card-prof">
          {/* User Card */}
          <div className="col-md-3">
            <div className="card hovercard">
              <div className="cardheader"></div>
              <div className="avatar">
                <img
                  alt="User"
                  src="images/users/avatar-1.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="info">
                <div className="title">
                  <a href="#">Steena Ben</a>
                </div>
                <div className="desc">steena@gmail.com</div>
                <hr />
              </div>
              <nav className="nav text-center prof-nav">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Inbox</a>
                  </li>
                  <li>
                    <a href="#">Setting</a>
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
                      onClick={() => setActiveTab("profile")}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras nec urna aliquam, ornare eros vel, malesuada lorem.
                        Nullam faucibus lorem at eros consectetur lobortis.
                        Maecenas nec nibh congue, placerat sem id, rutrum velit.{" "}
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
                            steena@gmail.com
                          </div>
                          <div className="form-group">
                            <strong className="mr-5">
                              <i className="fa fa-phone"> Phone: </i>
                            </strong>{" "}
                            +91 1233 45 5678
                          </div>
                          <div className="form-group">
                            <strong className="mr-5">
                              <i className="fa fa-map"> City: </i>
                            </strong>{" "}
                            New York
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <strong className="mr-5">
                              <i className="fa fa-globe"> Country: </i>
                            </strong>{" "}
                            steena@gmail.com
                          </div>
                          <div className="form-group">
                            <strong className="mr-5">
                              <i className="fa fa-map-marker"> Address: </i>
                            </strong>{" "}
                            25, Dist town Street, Logn California, US
                          </div>
                          <div className="form-group">
                            <strong className="mr-5">
                              <i className="fa fa-globe"> Website: </i>
                            </strong>{" "}
                            www.Businessbox.com
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "inbox" && (
                    <div className="panel panel-default widget">
                    <div className="panel-heading">
                        <h3 className="panel-title"><i className="fa fa-comment"></i> Messages</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="/images/users/avatar-2.jpg" className="img-circle img-fluid" alt="" /></div>
                                    <div className=" col-md-10">
                                        <div>
                                            <a href="#">
                                                Congratulations</a>
                                            <div className="mic-info">
                                                By: <a href="#">Check My Athletics</a> on 12 Jun 2018
                                            </div>
                                        </div>
                                        <div className="comment-text">
                                            We would like to congratulate John on his achievement...
                                        </div>
                                        <a  href="#" className="btn btn-sm btn-hover btn-primary" /><a href="#reply" /><span className="fa fa-share-alt" style={{paddingRight:"3px;"}} />
                                        <a href="#" className="btn btn-sm btn-hover btn-danger"><span className="fa fa-remove" style={{paddingRight:"3px;"}}></span></a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="images/users/avatar-3.jpg" className="img-circle img-fluid" alt="" /></div>
                                    <div className=" col-md-10">
                                        <div>
                                            <a href="#">Great Job</a>
                                            <div className="mic-info">
                                                By: <a href="#">Coacher</a> on 11 May 2018
                                            </div>
                                        </div>
                                        <div className="comment-text">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="images/users/avatar-2.jpg" className="img-circle img-fluid" alt="" /></div>
                                    <div className=" col-md-10">
                                        <div>
                                            <a href="#">Great Job</a>
                                            <div className="mic-info">
                                                By: <a href="#">Coacher</a> on 11 May 2018
                                            </div>
                                        </div>
                                        <div className="comment-text">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
                  )}
                  {activeTab === "settings" && (
                    <div className="tab-pane fade show active">
                      <div className="row mx-2">
                                        <div className="col-md-12 panel-heading">
                                            <h3 className="panel-title"><i className="fa fa-comment"></i> Edit Info</h3> <br />
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="form-group row">
                                                <label htmlFor="example-email-input" style={{width: "85px;"}} className=" col-form-label">Name</label>
                                                <div className="col-9">
                                                    <input className="form-control" type="text" value="Steena Ben" id="example-text-input"/>
                                                </div>
                                            </div> 
                                            <div className="form-group row">
                                                <label htmlFor="example-email-input" style={{width: "85px;"}} className=" col-form-label">Email</label>
                                                <div className="col-9">
                                                    <input className="form-control" type="email" value="steena@gmail.com" id="example-email-input"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="example-url-input" style={{width: "85px;"}} className=" col-form-label">URL</label>
                                                <div className="col-9">
                                                    <input className="form-control" type="url" value="www.Businessbox.com" id="example-url-input"/>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" style={{width: "85px;"}} className=" col-form-label">Department</label>
                                                <div className="col-9">
                                                    <input className="form-control" type="text" value="Programming" id="example-text-input"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="example-date-input" style={{width: "85px;"}} className=" col-form-label">Hire Date</label>
                                                <div className="col-9">
                                                    <input className="form-control" type="date" value="2018-08-19" id="example-date-input"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="example-tel-input" style={{width: "85px;"}} className=" col-form-label">Telephone</label>
                                                <div className="col-9">
                                                    <input className="form-control" type="tel" value="+91-(555)-555-5555" id="example-tel-input"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
