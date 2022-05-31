import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;
