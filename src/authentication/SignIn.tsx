import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/authstyles.css";
import "../assets/style.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Store dynamic message
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const navigate = useNavigate();

  const getStatus = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/status/${token}`
      );
      console.log(response.data);
      console.log(response.data.data[0].status);
      setStatus(response.data.data[0].status);
    } catch (error) {
      setStatus(1);
      console.error("Error fetching status:", error);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  // useEffect(() => {
  //   // Check if user is already logged in
  //   const storedToken =
  //     localStorage.getItem("token") || sessionStorage.getItem("token");
  //   if (storedToken) {
  //     navigate("/"); // Redirect to dashboard if logged in
  //   }
  // }, [navigate]);

  const handleSubmit = async (e: any) => {
    console.log(email, password);
    e.preventDefault();
    setErrorMessage(""); // Reset message before making the request
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
      navigate("/"); // Redirect after login
    } catch (error: any) {
      if (error.response) {
        console.log(error);
        setErrorMessage(error.response.data.message); // Display dynamic error message
        setIsModalOpen(true); // Open modal
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setIsModalOpen(true);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(""); // Clear error when closing modal
  };

  return (
  // <Headers />
    <div className="auth-container">
      {/* Company Logo */}
      <img src="/images/Lyra-Zone-Logo-New-White.png" alt="LyraZone Logo" />

      {/* Sign-In Form */}
      <form
        onSubmit={handleSubmit}
        className="auth-bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="auth-text-2xl font-bold mb-4">
          {status === 0 ? (
            <p>Please Check Your Email to Activate the Account !</p>
          ) : (
            <p className="alternate">Welcome Back !</p>
          )}
          <br />
          Sign In
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-border p-2 w-full mb-2"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-border p-2 w-full mb-2"
        />

        {/* Sign-In Button with Disabled State */}
        {status !== 0 ? (
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        ) : (
          <button type="button" className="sign-in-btn disabled-btn" disabled>
            Sign In
          </button>
        )}
      </form>

      {/* Error Modal */}
      {isModalOpen && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            {errorMessage &&(
              <>
                <img src="/oops-icon.png" alt="Oops" className="auth-oops-icon" />
                <div className="auth-error-message">{errorMessage}</div>
              </>
            )}

            <div className="auth-modal-buttons">
              <button onClick={closeModal} className="auth-ok-btn">
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign-Up and Forgot Password Links */}
      <div className="auth-general-text">
        <a href="/signup">Sign Up Now !</a>
        <a style={{ marginLeft: "50px" }} href="/forgot-password">
          Forgot Password?
        </a>
      </div>

      {/* Remember Me Checkbox */}
      <div className="auth-remember-me">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="rememberMe" style={{ marginLeft: "5px" }}>
          Remember Me
        </label>
      </div>
    </div>
  );
};

export default SignIn;
