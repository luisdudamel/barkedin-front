import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { StyledProfileBar } from "./StyledProfileBar";
import { Button } from "@mui/material";
import { AddCircle, LogoutRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const ProfileBar = (): JSX.Element => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <StyledProfileBar>
      <Box className="profile-bar-container" sx={{ flexGrow: 1 }}>
        <AppBar className="appbar" position="static">
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
              onClick={() => navigate("/create")}
            >
              New dog
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledProfileBar>
  );
};
