import styled from "styled-components";

const StyledDog = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-left: 15px;
  margin-right: 15px;
  .dog-card {
    display: flex;
    &-content {
      width: 100%;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      &__avatar {
        width: 250px;

        border-radius: 30px;
        object-fit: contain;
      }
      &__personality {
        height: 60px;
        width: 60px;
        object-fit: fill;
        margin-left: 30px;
      }
    }
    &-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 20px;
      &__delete {
        width: 40px;
        height: 40px;
      }
      &__name {
        font-size: 40px;
        font-weight: 500;
        font-style: italic;
        margin-bottom: 0px;
        color: #264653;
      }
      &__title {
        font-size: 20px;
        color: #f4a261;
        font-weight: 400;
      }
    }
  }
`;
export default StyledDog;
