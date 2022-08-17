import styled from "styled-components";

const StyledMeeting = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  width: 95%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  margin-left: 30px;
  margin-right: 30px;
  .image-container {
    width: 280px;
  }
  .meeting-card {
    display: flex;
    &-content {
      width: 100%;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      &__avatar {
        height: 200px;
        border-radius: 30px;
        object-fit: cover;
      }
      &__personality {
        height: 70px;
        width: 70px;
        object-fit: fill;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
      }
      &__date {
        font-size: 40px;
        font-weight: 600;
        font-style: italic;
        margin-bottom: -7px;
        color: #264653;
        letter-spacing: -2px;
        text-align: end;
      }
      &__time {
        margin-top: -10px;
        font-size: 20px;
        color: #f4a261;
        font-weight: 600;
        text-align: end;
        padding-top: 10px;
      }
      &-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
      }
    }
    &-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 0px;
      &__delete {
        width: 50px;
        height: 50px;
      }
      &__name {
        font-size: 40px;
        font-weight: 600;
        font-style: italic;
        margin-bottom: -7px;
        color: #264653;
        letter-spacing: -2px;
      }
      &__title {
        margin-top: -10px;
        font-size: 20px;
        color: #f4a261;
        font-weight: 600;
      }
      &-location {
        font-size: 20px;
        font-weight: 600;
        font-style: italic;
        margin-bottom: -7px;
        color: #e76f51;
        letter-spacing: -2px;
        text-align: end;
      }
    }
  }
  @media (max-width: 300px) {
    .meeting-card {
      display: flex;
      &-content {
        width: 100%;
      }
      &-top {
        display: flex;
        justify-content: space-between;
        &__avatar {
          border-radius: 30px;
          object-fit: fill;
        }
        &__personality {
          height: 40px;
          width: 40px;
          object-fit: fill;
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10px;
        }
        &__date {
          font-size: 40px;
          font-weight: 600;
          font-style: italic;
          margin-bottom: -7px;
          color: #264653;
          letter-spacing: -2px;
          text-align: end;
        }
        &__time {
          margin-top: -10px;
          font-size: 20px;
          color: #f4a261;
          font-weight: 600;
          text-align: end;
          padding-top: 10px;
        }
        &-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
        }
      }
      &-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 0px;
        &__delete {
          width: 40px;
          height: 40px;
        }
        &__name {
          font-size: 20px;
          font-weight: 700;
          font-style: italic;
          margin-bottom: 0px;
          color: #264653;
        }
        &__title {
          font-size: 15px;
          color: #f4a261;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .meeting-card {
      &-top {
        display: flex;
        justify-content: space-between;
        &__avatar {
          border-radius: 30px;
          object-fit: fill;
        }
        &__personality {
          height: 40px;
          width: 40px;
          object-fit: fill;
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10px;
        }
        &__date {
          font-size: 30px;
          font-weight: 600;
          font-style: italic;
          margin-bottom: -7px;
          color: #264653;
          letter-spacing: -2px;
          text-align: end;
        }
        &__time {
          margin-top: -10px;
          font-size: 20px;
          color: #f4a261;
          font-weight: 600;
          text-align: end;
          padding-top: 10px;
        }
        &-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
        }
      }
    }
  }
`;
export default StyledMeeting;
