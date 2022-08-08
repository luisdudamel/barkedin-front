import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20vh;
`;

export const NotFoundPage = (): JSX.Element => {
  return (
    <StyledNotFoundPage>
      <img
        width={300}
        src="../../barkedin/images/notfound.webp"
        alt="A dog didnt found the page"
      />
      <Header text="Oops.. something went wrong" />
      <NavLink to="/barkedin/home" style={{ textDecoration: "none" }}>
        Back to home
      </NavLink>
    </StyledNotFoundPage>
  );
};
