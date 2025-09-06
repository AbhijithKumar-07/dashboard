
// File: src/pages/LoginPage.jsx
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Box, Input, Button, Heading } from "@chakra-ui/react";
import { useRole } from "../context/RoleContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth";
import { signInWithEmailAndPassword, onIdTokenChanged } from "firebase/auth";
=======
import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Heading } from '@chakra-ui/react';
import { useRole } from '../context/RoleContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../auth'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = useRole();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
<<<<<<< HEAD
    if (token) navigate("/bookings");
  }, [token, navigate]);

  // Keep token fresh
  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const freshToken = await user.getIdToken(); // auto-refresh handled by Firebase
        login(freshToken, "admin");
      } else {
        login(null, null);
      }
    });

    return () => unsubscribe();
  }, [login]);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Ensure latest token on login
      const idToken = await user.getIdToken(true);
      console.log("Login successful, token:", idToken);
      login(idToken, "admin");
    } catch (err) {
      console.error("Login failed:", err.message);
      alert(err.message);
    }
  };
=======
    console.log('Token changed:', token); 
    if (token) navigate('/bookings');
  }, [token, navigate]);

  // const handleLogin = () => {
  //   if (email === 'admin@demo.com' && password === 'admin') {
  //     login('demo-token', 'admin');
  //   } else {
  //     alert('Demo Login: admin@demo.com / admin');
  //   }
  // };

  const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const idToken = await user.getIdToken(); // ✅ real JWT
    login(idToken, "admin"); 
  } catch (err) {
    console.error("Login failed:", err.message);
    alert(err.message);
  }
};
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={20}
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
    >
      <Heading mb={6}>Login</Heading>
      <Input
        mb={3}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        mb={3}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
