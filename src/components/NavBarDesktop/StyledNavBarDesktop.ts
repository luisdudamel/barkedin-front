import styled from "styled-components";

export const StyledNavBarDesktop = styled.nav`
  width: 100%;
  box-shadow: none;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;

  .appbar {
    background-color: transparent;
    box-shadow: none;
  }
  .header-title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    font-style: italic;
    line-height: 141.93%;
    letter-spacing: -0.05em;
    cursor: pointer;
    color: #264653;
    &__active {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      font-style: italic;
      line-height: 141.93%;
      letter-spacing: -0.05em;
      cursor: pointer;
      text-decoration-line: underline;
      color: #e76f51;
    }
  }
  .header-toolbar {
    display: flex;
    justify-content: space-around;
  }
  .profile-button {
    background: #2a9d8f;
    border-radius: 15px;
    font-style: italic;
    font-weight: 600;
    font-size: 24px;
    line-height: 141.93%;
    letter-spacing: -0.05em;
  }
`;
