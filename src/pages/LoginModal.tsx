import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginModal: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Store dynamic message
  // const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e: any) => {
    console.log(email, password);
    e.preventDefault();
    // setErrorMessage(""); // Reset message before making the request
    try {
      const response = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
        rememberMe,
      });
      console.log(response.data);

      const token = response.data.token;
      if (rememberMe) {
        localStorage.setItem("token", token); // Store token persistently
      } else {
        sessionStorage.setItem("token", token); // Store for session only
      }
      window.location.href = "/"; // Redirect after login
    } catch (error: any) {
      if (error.response) {
        console.log(error);
        alert(error.response.data.message);
        // setErrorMessage(error.response.data.message); // Display dynamic error message
        // setIsModalOpen(true); // Open modal
      } else {
        // setErrorMessage("Something went wrong. Please try again.");
        // setIsModalOpen(true);
      }
    }
  };

  const handleRegisterSubmit = async (e: any) => {
    e.preventDefault();
    // setErrorMessage(""); // Reset message before making the request
    // if (formData.password !== formData.confirmPassword) {
    //   setErrorMessage("Passwords do not match!");
    //   setIsModalOpen(true);

    //   return;
    // }

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, (formData as any)[key]);
    });
    console.log(formDataObj);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formDataObj
      );
      console.log(response.data);
      alert(response.data.message);
      // setErrorMessage(response.data.message);
      // setIsModalOpen(true);
      localStorage.setItem("token", response.data.token);
      // window.location.href = "/";
    } catch (error: any) {
      if (error.response) {
        console.log(error);
        alert(error.response.data.message);
        // setErrorMessage(error.response.data.message); // Display dynamic error message
        // setIsModalOpen(true); // Open modal
      } else {
        alert("Something went wrong. Please try again.");
        // setErrorMessage("Something went wrong. Please try again.");
        // setIsModalOpen(true);
      }
    }
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setErrorMessage(""); // Clear error when closing modal
  // };

  return (
    <section id="login">
      <div
        className="modal fade"
        id="login-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header text-center">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="fa fa-times" aria-hidden="true"></span>
              </button>
            </div>

            {/* Form Container */}
            <div id="div-forms">
              {isLogin ? (
                /* Login Form */
                <form id="login-form" onSubmit={handleLoginSubmit}>
                  <h3 className="text-center">Login</h3>
                  <div className="modal-body">
                    <label htmlFor="login_username">Username</label>
                    <input
                      id="login_username"
                      className="form-control"
                      type="text"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <label htmlFor="login_password">Password</label>
                    <input
                      id="login_password"
                      className="form-control"
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>
                  </div>

                  <div className="modal-footer text-center">
                    <div>
                     <button
                        type="submit"
                        className="btn btn-general btn-white"
                      > 
                        Login
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => setIsLogin(false)}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* Register Form */
                <form id="register-form" onSubmit={handleRegisterSubmit}>
                  <h3 className="text-center">Register</h3>
                  <div className="modal-body">
                    <label htmlFor="register_username">Username</label>
                    <input
                      id="register_username"
                      className="form-control"
                      name="name"
                      type="text"
                      placeholder="Enter username"
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="register_email">E-mail</label>
                    <input
                      id="register_email"
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="register_password">Password</label>
                    <input
                      id="register_password"
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="modal-footer text-center">
                    <div>
                     <button
                        type="submit"
                        className="btn btn-general btn-white"
                      > 
                        Sign Up
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => setIsLogin(true)}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
            {/* {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  {errorMessage && (
                    <>
                      <img
                        src="/oops-icon.png"
                        alt="Oops"
                        className="oops-icon"
                      />
                      <div className="error-message">{errorMessage}</div>
                    </>
                  )}

                  <div className="modal-buttons">
                    <button onClick={closeModal} className="ok-btn">
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginModal;
