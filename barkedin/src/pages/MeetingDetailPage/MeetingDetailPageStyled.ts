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
  .dog-card-bottom__bio-characteristic {
    color: #264653;
  }
  .dog-card-bottom__bio-property {
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
  @media (max-width: 599px) {
    .appbar {
      margin-top: 0px;
    }
  }
  @media (min-width: 600px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
export default MeetingDetailPageStyled;
