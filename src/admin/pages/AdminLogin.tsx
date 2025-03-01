import { useState } from 'react';
import '../assets/css/pages/login.css';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="hero-area">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-h-cont">
              <h3 className="text-center">
                <img src="../assets/img/logo.png" className="img-fluid" alt="Logo" />
              </h3>
              <br />
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="example-password-input">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="example-password-input"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-general btn-blue" type="submit">
                  <i className="fa fa-arrow-right"></i> Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
