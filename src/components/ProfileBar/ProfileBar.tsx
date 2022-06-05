import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { StyledProfileBar } from "./StyledProfileBar";
import { Button } from "@mui/material";
import { AddCircle, LogoutRounded } from "@mui/icons-material";

export const ProfileBar = (): JSX.Element => {
  return (
    <StyledProfileBar>
      <Box className="profile-bar-container" sx={{ flexGrow: 1 }}>
        <AppBar className="appbar" position="static">
          <Toolbar className="toolbar">
            <Button
              className="profile-button"
              variant="contained"
              endIcon={<LogoutRounded />}
            >
              Logout
            </Button>
            <Button
              className="profile-button"
              variant="contained"
              endIcon={<AddCircle />}
            >
              New dog
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledProfileBar>
  );
};
