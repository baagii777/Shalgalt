import React, { useState } from "react";
import "./ModalLogin.css";

const ModalLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    // Perform your login logic here
    // For simplicity, let's just set loggedIn to true
    setLoggedIn(true);
    closeModal();
  };

  return (
    <div>
      {loggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button onClick={openModal}>Login</button>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Login</h2>
            {/* Add your login form here */}
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLogin;
