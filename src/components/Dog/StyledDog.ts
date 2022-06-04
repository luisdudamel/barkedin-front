import styled from "styled-components";

const StyledDog = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 15px;
  .dog-card {
    display: flex;
    &-content {
      width: 100%;
    }
  }
  .dog-card-top {
    display: flex;
    justify-content: space-between;
    .card-avatar {
      width: 250px;
      border-radius: 30px;
      object-fit: contain;
    }
    .card-personality {
      height: 60px;
      width: 60px;
      object-fit: fill;
    }
  }
`;
export default StyledDog;
