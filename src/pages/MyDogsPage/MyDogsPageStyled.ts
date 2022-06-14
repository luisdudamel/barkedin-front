import styled from "styled-components";

const MyDogsPageStyled = styled.div`
  .dogs-grid {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h1 {
    padding-top: 30px;
  }
  .load-more-container {
    width: 170px;
    margin-left: 15px;
    margin-bottom: 15px;
  }
  .header-text {
    margin-top: 45px;
  }
  @media (max-width: 599px) {
    .header-text {
      margin-top: 0px;
    }
  }
`;
export default MyDogsPageStyled;
