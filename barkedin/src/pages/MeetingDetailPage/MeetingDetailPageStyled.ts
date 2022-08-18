import styled from "styled-components";

const MeetingDetailPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  h1 {
    padding-top: 30px;
  }
  .appbar {
    margin-top: 45px;
  }
  .meeting-card-bottom__title {
    margin-top: 10px;
  }
  .meeting-card-bottom__bio {
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 141.93%;

    letter-spacing: -0.05em;

    color: #2a9d8f;
  }
  .meeting-card-secondary-container {
    margin-top: 40px;
    width: 50%;
  }
  .meeting-card-bottom__bio-characteristic {
    color: #264653;
  }
  .meeting-card-bottom__bio-property {
    color: #f4a261;
  }
  .edit-button {
    margin-top: 40px;
    width: 200px;
    background: #2a9d8f;
    border-radius: 15px;
    font-style: italic;
    font-weight: 600;
    font-size: 24px;
    line-height: 141.93%;
    letter-spacing: -0.05em;
  }
  .delete-button {
    margin-top: 40px;
    width: 200px;
    background: #e76f51;
    border-radius: 15px;
    font-style: italic;
    font-weight: 600;
    font-size: 24px;
    line-height: 141.93%;
    letter-spacing: -0.05em;
  }
  @media (max-width: 599px) {
    .appbar {
      margin-top: 0px;
    }
  }
  @media (min-width: 600px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  .map-container {
    padding-top: 20px;
    width: 100%;
    height: 500px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    &-frame {
      border-radius: 50px;
      padding: 10px 20px;
      width: 100%;
      height: 100%;
    }
    &-heading {
      height: 40px;
      width: 100%;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      font-style: italic;
      font-weight: 600;
      &__title {
        color: #264653;
        display: flex;
        align-items: center;
      }
      &__location {
        color: #d9441e;
        display: flex;
        align-items: center;
      }
    }
  }
`;
export default MeetingDetailPageStyled;
