import { useState } from "react";
import axios from "axios";
// import { formData as setFormData} from "../data/FormData";
import "./css/authstyles.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userImage: null,
  });
  const [errorMessage, setErrorMessage] = useState(""); // Store dynamic message
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [previewImage, setPreviewImage] = useState("/images/user-icon.png"); // Default icon

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, userImage: file });
      setPreviewImage(URL.createObjectURL(file)); // Generate preview
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    setErrorMessage(""); // Reset message before making the request
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setIsModalOpen(true);

      return;
    }

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
      setErrorMessage(response.data.message);
      setIsModalOpen(true);
      localStorage.setItem("token", response.data.token);
      window.location.href = "/signin";
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
    <div className="auth-container">
      <div>
        <img
          style={{
            width: 60,
            position: "absolute",
            marginLeft: -140,
          }}
          src="/images/Lyra-Zone-Logo-New-White.png"
        ></img>
        {/* Image Preview (Clicking opens file selection) */}
        <label htmlFor="file-upload" className="attachment-icon">
          <img
            style={{
              width: 60,
              height: 60,
              position: "absolute",
              right: 0,
              marginRight: "-150px",
              cursor: "pointer", // Makes it look clickable
              borderRadius: "50%", // Optional for circular display
              objectFit: "cover", // Prevents stretching
            }}
            src={previewImage}
            alt="User Icon"
          />
        </label>
      </div>
      <form
        onSubmit={handleSubmit}
        className="auth-bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="auth-border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name (Optional)"
          onChange={handleChange}
          // required
          className="auth-border p-2 w-full mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="auth-border p-2 w-full mb-2"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="auth-border p-2 w-full mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="auth-border p-2 w-full mb-2"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
          className="auth-border p-2 w-full mb-2"
        />
        <div>
          {/* User Icon shifted from here to top */}
          <input
            type="file"
            id="file-upload"
            name="userImage"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }} // Hides the default input
          />
        </div>
        <button
          type="submit"
          className="sign-in-btn"
        >
          Sign Up
        </button>
      </form>

      {/* Error Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>
              {errorMessage && (
                <>
                  <img src="/oops-icon.png" alt="Oops" className="oops-icon" />
                  <div className="error-message">{errorMessage}</div>
                </>
              )}
            </p>
            <div className="modal-buttons">
              <button onClick={closeModal} className="ok-btn">
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="general-text">
        <a style={{ marginLeft: 70 }} href="./signin">
          Already have account !
        </a>
      </div>
    </div>
  );
};

export default SignUp;
