import styled from "styled-components";

export const StyledProfileBar = styled.nav`
  width: 100%;
  box-shadow: none;
  .appbar {
    background-color: transparent;
    box-shadow: none;
  }
  .filter-title {
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    font-style: italic;
    line-height: 141.93%;
    letter-spacing: -0.05em;

    color: #264653;
  }
  .toolbar {
    display: flex;
    justify-content: space-between;
  }
  .profile-button {
    background: #2a9d8f;
    border-radius: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 141.93%;
    letter-spacing: -0.05em;
  }
`;
