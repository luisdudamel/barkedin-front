import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { AddCircle, LogoutRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUserActionCreator } from "../../redux/feature/usersSlice";
import { StyledFilterBar } from "./StyledFilterBarr";

export const FilterBar = (): JSX.Element => {
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

    navigate("/login");
  };

  return (
    <StyledFilterBar>
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
    </StyledFilterBar>
  );
};
