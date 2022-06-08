import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
                src={`../../images/icons/mobile/navbar/${
                  pathname === "/home" ? "active" : "inactive"
                }/home.png`}
                onClick={() => navigate("/home")}
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
                src={`../../images/icons/mobile/navbar/${
                  pathname === "/dates" ? "active" : "inactive"
                }/dates.png`}
                onClick={() => navigate("/dates")}
              />
            }
          />

          <BottomNavigationAction
            icon={
              <img
                alt={`Favorites navbar ${
                  pathname === "/friends" ? "active" : "inactive"
                } icon`}
                height={"30px"}
                src={`../../images/icons/mobile/navbar/${
                  pathname === "/friends" ? "active" : "inactive"
                }/friends.png`}
                onClick={() => navigate("/friends")}
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
                src={`../../images/icons/mobile/navbar/${
                  pathname === "/profile" ? "active" : "inactive"
                }/profile.png`}
                onClick={() => navigate("/profile")}
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
