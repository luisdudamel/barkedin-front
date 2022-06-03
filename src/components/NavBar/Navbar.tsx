import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ pb: 7 }} className={"bottom"}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ bgcolor: "white" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={
              <img
                alt="Favorites navbar icon"
                height={"30px"}
                src="../../images/mobile/navbar/inactive/home.png"
              />
            }
          />

          <BottomNavigationAction
            icon={
              <img
                alt="Favorites navbar icon"
                height={"30px"}
                src="../../images/mobile/navbar/inactive/dates.png"
              />
            }
          />

          <BottomNavigationAction
            icon={
              <img
                alt="Favorites navbar icon"
                height={"30px"}
                src={`../../images/mobile/navbar/${
                  pathname === "/mydogs" ? "active" : "inactive"
                }/friends.png`}
              />
            }
          />

          <BottomNavigationAction
            icon={
              <img
                alt="Favorites navbar icon"
                height={"30px"}
                src="../../images/mobile/navbar/inactive/profile.png"
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
