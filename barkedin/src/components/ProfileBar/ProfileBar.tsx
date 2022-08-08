import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { StyledProfileBar } from "./StyledProfileBar";
import { Button } from "@mui/material";
import { AddCircle, LogoutRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUserActionCreator } from "../../redux/feature/usersSlice";

export const ProfileBar = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(
      logoutUserActionCreator({
        name: "",
        username: "",
        id: "",
        logged: false,
      })
    );

    navigate("/barkedin/login");
  };

  return (
    <StyledProfileBar>
      <Box className="profile-bar-container" sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ background: "transparent" }}
          className="appbar"
          position="static"
        >
          <Toolbar className="toolbar">
            <Button
              className="logout profile-button"
              variant="contained"
              endIcon={<LogoutRounded />}
              onClick={() => logout()}
            >
              Logout
            </Button>
            <Button
              className="profile-button"
              variant="contained"
              endIcon={<AddCircle />}
              onClick={() => navigate("/barkedin/create")}
            >
              New dog
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledProfileBar>
  );
};
