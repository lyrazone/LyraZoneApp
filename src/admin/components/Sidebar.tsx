import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav className="side-navbar">
      <div className="sidebar-header d-flex align-items-center">
        <div className="avatar">
          <img
            src="/images/users/avatar-1.jpg"
            alt="User Avatar"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="title">
          <h1 className="h4">Steena Ben</h1>
        </div>
      </div>
      <hr />
      {/* Sidebar Navigation */}
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
    </nav>
  );
};

export default Sidebar;
