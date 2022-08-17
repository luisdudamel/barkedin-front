import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StyledNavBarDesktop } from "./StyledNavBarDesktop";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBarDesktop = (): JSX.Element => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledNavBarDesktop>
      <Box sx={{ flexGrow: 1 }} className={"top"}>
        <AppBar position="static">
          <Toolbar className="header-toolbar" variant="dense">
            <div onClick={() => navigate("/barkedin/home")}>
              <Typography
                className={`header-title${
                  pathname === "/barkedin/home" ? "__active" : ""
                }`}
              >
                HOME
              </Typography>
            </div>
            <div onClick={() => navigate("/barkedin/meetings")}>
              <Typography
                className={`header-title${
                  pathname === "/barkedin/meetings" ? "__active" : ""
                }`}
              >
                MEETINGS
              </Typography>
            </div>
            <div onClick={() => navigate("/barkedin/friends")}>
              <Typography
                className={`header-title${
                  pathname === "/barkedin/friends" ? "__active" : ""
                }`}
              >
                FRIENDS
              </Typography>
            </div>
            <div onClick={() => navigate("/barkedin/profile")}>
              <Typography
                className={`header-title${
                  pathname === "/barkedin/profile" ? "__active" : ""
                }`}
              >
                PROFILE
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledNavBarDesktop>
  );
};
