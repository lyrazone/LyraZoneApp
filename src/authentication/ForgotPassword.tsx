import { useState } from "react";
import axios from "axios";
import "./css/authstyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Store dynamic message
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage(""); // Reset message before making the request
    try {
      const response = await axios.post(
        "http://localhost:5000/api/forgot-password",
        { email }
      );
      alert(response.data.message);
      setErrorMessage(response.data.message);
      setIsModalOpen(true);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Something went wrong!");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(""); // Clear error when closing modal
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {/* Error Modal */}
      {isModalOpen && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            {errorMessage && (
              <>
                <img src="/oops-icon.png" alt="Oops" className="oops-icon" />
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
      )}
    </div>
  );
};

export default ForgotPassword;
