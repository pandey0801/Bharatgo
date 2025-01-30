import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../src/redux/cartSlice";
import "./Logout.css"; // Import CSS file

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div className="logout-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
