// File: src/components/LogoutButton.jsx
import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { auth } from "../auth";
import { signOut } from "firebase/auth";

const LogoutButton = () => {
  const { logout } = useRole(); // use centralized logout from RoleContext
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);       // 🔥 sign out from Firebase
      await logout();            // 🔥 clear context + localStorage
      navigate("/login");        // redirect to login
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <Button colorScheme="red" onClick={handleLogout} mt={4}>
      Logout
    </Button>
  );
};

export default LogoutButton;
