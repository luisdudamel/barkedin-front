import jwtDecode from "jwt-decode";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CredentialsInValidation from "./components/CredentialsInvalidation/CredentialsInValidation";
import CredentialsValidation from "./components/CredentialsValidation/CredentialsValidation";
import { NavBar } from "./components/NavBar/Navbar";
import { UserState } from "./interfaces/UserCredential";
import CreateEditPage from "./pages/CreateEditPage/CreateEditPage";
import { DogDetailPage } from "./pages/DogDetailPage/DogDetailPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { MeetingDetailPage } from "./pages/MeetingDetailPage/MeetingDetailPage";
import MeetingsPage from "./pages/MeetingsPage/MeetingsPage";
import MyDogsPage from "./pages/MyDogsPage/MyDogsPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { loginUserActionCreator } from "./redux/feature/usersSlice";
import { useAppDispatch } from "./redux/hooks";

function App(): JSX.Element {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  try {
    const userData = jwtDecode<UserState>(token as string);
    dispatch(
      loginUserActionCreator({
        name: userData.name,
        username: userData.username,
        id: userData.id,
        logged: true,
      })
    );
  } catch (error) {}

  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <CredentialsValidation>
              <NotFoundPage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin"
          element={
            <CredentialsValidation>
              <HomePage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin/home"
          element={
            <CredentialsValidation>
              <HomePage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin/register"
          element={
            <CredentialsInValidation>
              <RegisterPage />
            </CredentialsInValidation>
          }
        />
        <Route
          path="/barkedin/detail/:id"
          element={
            <CredentialsValidation>
              <DogDetailPage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin/login"
          element={
            <CredentialsInValidation>
              <LoginPage />
            </CredentialsInValidation>
          }
        />
        <Route
          path="/barkedin/create"
          element={
            <CredentialsValidation>
              <CreateEditPage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin/edit/:id"
          element={
            <CredentialsValidation>
              <CreateEditPage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin/profile"
          element={
            <CredentialsValidation>
              <MyDogsPage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin/meetings"
          element={
            <CredentialsValidation>
              <MeetingsPage />
            </CredentialsValidation>
          }
        />
        <Route
          path="/barkedin/meetings/:id"
          element={
            <CredentialsValidation>
              <MeetingDetailPage />
            </CredentialsValidation>
          }
        />
      </Routes>
      {pathname !== "/barkedin/login" &&
        pathname !== "/barkedin/register" &&
        pathname !== "/barkedin/home" &&
        pathname !== "/barkedin/meetings" &&
        pathname !== "/barkedin/profile" && <NavBar />}
    </>
  );
}

export default App;
