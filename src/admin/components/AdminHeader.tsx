import { useState, useEffect } from "react";
import {
  FaBell,
  FaEnvelope,
  FaBars,
  FaUser,
  FaCog,
  FaPowerOff,
  FaSearch,
} from "react-icons/fa";
import logoWhite from "../assets/img/logo-white.png";
import lyraZoneLogo from "../assets/img/qrapp.png";
import logoIcon from "../assets/img/logo-icon.png"; 
import avatar1 from "../assets/img/avatar-1.jpg";
import avatar2 from "../assets/img/avatar-2.jpg";
import avatar3 from "../assets/img/avatar-3.jpg";
import avatar4 from "../assets/img/avatar-4.jpg";

const AdminHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
    const [userImage, setUserImage] = useState("");
  
     useEffect(() => {
        setUserImage(JSON.parse((sessionStorage.getItem("userdata") || "null")).user_image);
      }, []);

  const handleToggle = () => {
    setIsActive(!isActive); // Toggle state
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-white shadow-md">
        {isSearchOpen && (
          <div className="search-box">
            <button className="dismiss" onClick={() => setIsSearchOpen(false)}>
              <i className="icon-close"></i>
            </button>
            <form id="searchForm" role="search">
              <input
                type="search"
                placeholder="Search Now"
                className="form-control"
              />
            </form>
          </div>
        )}

        <div className="container-fluid d-flex justify-between align-items-center">
          <div className="navbar-header d-flex">
            <a href="/" className="navbar-brand">
              <img
                src={isActive ? logoIcon : logoWhite}
                alt="Logo"
                className="img-fluid"
              />
            </a>
            <a
              id="toggle-btn"
              href="#"
              className={`menu-btn ${isActive ? "active" : ""}`}
              onClick={handleToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>

          <ul className="nav-menu list-unstyled e-flex align-items-center">
            <li className="nav-item">
              <a href="#" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <FaSearch />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              >
                <FaBell /> <span className="badge">12</span>
              </a>
              {isNotificationsOpen && (
                <ul className="dropdown-menu">
                  <li>You have 6 new messages</li>
                  <li>Server Rebooted</li>
                  <li>You have 2 followers</li>
                  <li>
                    <a href="#">View all notifications</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item dropdown">
              <a href="#" onClick={() => setIsMessagesOpen(!isMessagesOpen)}>
                <FaEnvelope /> <span className="badge">10</span>
              </a>
              {isMessagesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <img
                      src={`../src/admin/assets/img/users/${userImage}`}
                      alt=""
                      className="img-fluid rounded-circle"
                    />{" "}
                    Jason Doe
                  </li>
                  <li>
                    <img
                      src={avatar2}
                      alt=""
                      className="img-fluid rounded-circle"
                    />{" "}
                    Frank Williams
                  </li>
                  <li>
                    <a href="#">Read all messages</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item dropdown">
              <a href="#" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                <img
                  src={`../src/admin/assets/img/users/${userImage}`}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ height: 30, width: 30 }}
                />
              </a>
              {isProfileOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <FaUser /> My Profile
                  </li>
                  <li>
                    <FaCog /> Settings
                  </li>
                  <li>
                    <FaPowerOff /> Logout
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a href="#">
                <FaBars />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
