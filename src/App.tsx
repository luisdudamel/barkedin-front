import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CredentialsValidation from "./components/CredentialsValidation/CredentialsValidation";
import { NavBar } from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyDogsPage from "./pages/MyDogsPage/MyDogsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <CredentialsValidation>
              <MyDogsPage />
            </CredentialsValidation>
          }
        />
      </Routes>
      {pathname !== "/login" && pathname !== "/register" && <NavBar />}
    </>
  );
}

export default App;
