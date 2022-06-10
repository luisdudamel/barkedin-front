import styled from "styled-components";

const StyledDogDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  h1 {
    padding-top: 30px;
  }
  .dog-card-bottom__title {
    margin-top: 10px;
  }
  .dog-card-bottom__bio {
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 141.93%;

    letter-spacing: -0.05em;

    color: #2a9d8f;
  }
  .dog-card-secondary-container {
    margin-top: 40px;
    width: 50%;
  }
`;
export default StyledDogDetailPage;
