import { Box, CssBaseline, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBarStyled = styled.div`
  .navbar-button-container {
    width: 25%;
    border: none;
    height: 50px;
  }
`;

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <NavBarStyled>
      <Box sx={{ pb: 7 }} className={"bottom"}>
        <CssBaseline />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <button className="navbar-button-container">
            <img
              alt={`Home navbar ${
                pathname === "/home" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../images/icons/mobile/navbar/${
                pathname === "/home" ? "active" : "inactive"
              }/home.png`}
              onClick={() => navigate("/home")}
            />
          </button>
          <button className="navbar-button-container">
            <img
              alt={`Dates navbar ${
                pathname === "/dates" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../images/icons/mobile/navbar/${
                pathname === "/dates" ? "active" : "inactive"
              }/dates.png`}
              onClick={() => navigate("/dates")}
            />
          </button>
          <button className="navbar-button-container">
            <img
              alt={`Favorites navbar ${
                pathname === "/friends" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../images/icons/mobile/navbar/${
                pathname === "/friends" ? "active" : "inactive"
              }/friends.png`}
              onClick={() => navigate("/friends")}
            />
          </button>
          <button className="navbar-button-container">
            <img
              alt={`Profile navbar ${
                pathname === "/profile" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../images/icons/mobile/navbar/${
                pathname === "/profile" ? "active" : "inactive"
              }/profile.png`}
              onClick={() => navigate("/profile")}
            />
          </button>
        </Paper>
      </Box>
    </NavBarStyled>
  );
};
