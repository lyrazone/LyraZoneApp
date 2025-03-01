import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/authstyles.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  // const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Store dynamic message
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage(""); // Reset message before making the request
    try {
      const response = await axios.post(
        `http://localhost:5000/api/reset-password/${token}`,
        { newPassword }
      );
      alert(response.data.message);
      setErrorMessage(response.data.message);
      setIsModalOpen(true);
      setTimeout(() => navigate("/"), 3000);
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
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {/* Error Modal */}
      {isModalOpen && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            {errorMessage && (
              <>
                <img src="/images/oops-icon.png" alt="Oops" className="auth-oops-icon" />
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
    </div>
  );
};

export default ResetPassword;
