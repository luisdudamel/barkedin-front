import styled from "styled-components";

export const StyledFilterBar = styled.nav`
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
    justify-content: flex-end;
  }
  .filter-button {
    width: 30px;
    margin-left: 10px;
    background: white;
    border-radius: 15px;
    font-style: italic;
    font-weight: 600;
    font-size: 24px;
    line-height: 141.93%;
    letter-spacing: -0.05em;
  }
  @media (max-width: 380px) {
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .filter-button {
      margin-bottom: 10px;
    }
  }
`;
