import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ pb: 7 }} className={"bottom"}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation sx={{ bgcolor: "white" }}>
          <BottomNavigationAction
            icon={
              <img
                alt={`Home navbar ${
                  pathname === "/home" ? "active" : "inactive"
                } icon`}
                height={"30px"}
                src={`../../images/mobile/navbar/${
                  pathname === "/home" ? "active" : "inactive"
                }/home.png`}
              />
            }
          />

          <BottomNavigationAction
            icon={
              <img
                alt={`Dates navbar ${
                  pathname === "/dates" ? "active" : "inactive"
                } icon`}
                height={"30px"}
                src={`../../images/mobile/navbar/${
                  pathname === "/dates" ? "active" : "inactive"
                }/dates.png`}
              />
            }
          />

          <BottomNavigationAction
            icon={
              <img
                alt={`Favorites navbar ${
                  pathname === "/favorites" ? "active" : "inactive"
                } icon`}
                height={"30px"}
                src={`../../images/mobile/navbar/${
                  pathname === "/favorites" ? "active" : "inactive"
                }/friends.png`}
              />
            }
          />

          <BottomNavigationAction
            icon={
              <img
                alt={`Profile navbar ${
                  pathname === "/profile" ? "active" : "inactive"
                } icon`}
                height={"30px"}
                src={`../../images/mobile/navbar/${
                  pathname === "/profile" ? "active" : "inactive"
                }/profile.png`}
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
