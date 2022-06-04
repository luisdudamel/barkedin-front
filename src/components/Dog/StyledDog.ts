import styled from "styled-components";

const StyledDog = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  .dog-card-top {
    display: flex;
    justify-content: space-between;
    .card-avatar {
      width: 250px;
      border-radius: 30px;
      object-fit: contain;
    }
    .card-personality {
      height: 70px;
      width: 70px;
      object-fit: fill;
    }
  }
`;
export default StyledDog;
