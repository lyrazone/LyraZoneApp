import React, { useState } from "react";

const LoginModal: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

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
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="fa fa-times" aria-hidden="true"></span>
              </button>
            </div>

            {/* Form Container */}
            <div id="div-forms">
              {isLogin ? (
                /* Login Form */
                <form id="login-form">
                  <h3 className="text-center">Login</h3>
                  <div className="modal-body">
                    <label htmlFor="login_username">Username</label>
                    <input id="login_username" className="form-control" type="text" placeholder="Enter username" required />

                    <label htmlFor="login_password">Password</label>
                    <input id="login_password" className="form-control" type="password" placeholder="Enter password" required />

                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>
                  </div>

                  <div className="modal-footer text-center">
                    <div>
                      <button type="submit" className="btn btn-general btn-white">
                        Login
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn btn-link" onClick={() => setIsLogin(false)}>
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* Register Form */
                <form id="register-form">
                  <h3 className="text-center">Register</h3>
                  <div className="modal-body">
                    <label htmlFor="register_username">Username</label>
                    <input id="register_username" className="form-control" type="text" placeholder="Enter username" required />

                    <label htmlFor="register_email">E-mail</label>
                    <input id="register_email" className="form-control" type="email" placeholder="Enter email" required />

                    <label htmlFor="register_password">Password</label>
                    <input id="register_password" className="form-control" type="password" placeholder="Enter password" required />
                  </div>

                  <div className="modal-footer">
                    <div>
                      <button type="submit" className="btn btn-general btn-white">
                        Register
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn btn-link" onClick={() => setIsLogin(true)}>
                        Log In
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginModal;
