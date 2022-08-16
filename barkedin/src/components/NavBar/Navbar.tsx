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
                pathname === "/barkedin/home" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../barkedin/images/icons/mobile/navbar/${
                pathname === "/barkedin/home" ? "active" : "inactive"
              }/home.png`}
              onClick={() => navigate("/barkedin/home")}
            />
          </button>
          <button className="navbar-button-container">
            <img
              alt={`Meetings navbar ${
                pathname === "/barkedin/meetings" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../barkedin/images/icons/mobile/navbar/${
                pathname === "/barkedin/meetings" ? "active" : "inactive"
              }/meetings.png`}
              onClick={() => navigate("/barkedin/meetings")}
            />
          </button>
          <button className="navbar-button-container">
            <img
              alt={`Favorites navbar ${
                pathname === "/barkedin/friends" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../barkedin/images/icons/mobile/navbar/${
                pathname === "/barkedin/friends" ? "active" : "inactive"
              }/friends.png`}
              onClick={() => navigate("/barkedin/friends")}
            />
          </button>
          <button className="navbar-button-container">
            <img
              alt={`Profile navbar ${
                pathname === "/barkedin/profile" ? "active" : "inactive"
              } icon`}
              height={"30px"}
              width={"30px"}
              src={`../../barkedin/images/icons/mobile/navbar/${
                pathname === "/barkedin/profile" ? "active" : "inactive"
              }/profile.png`}
              onClick={() => navigate("/barkedin/profile")}
            />
          </button>
        </Paper>
      </Box>
    </NavBarStyled>
  );
};
