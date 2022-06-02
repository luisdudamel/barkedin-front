import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CredentialsValidation from "./components/CredentialsValidation/CredentialsValidation";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyDogsPage from "./pages/MyDogsPage/MyDogsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/mydogs"
        element={
          <CredentialsValidation>
            <MyDogsPage />
          </CredentialsValidation>
        }
      />
    </Routes>
  );
}

export default App;
