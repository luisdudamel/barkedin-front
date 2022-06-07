import styled from "styled-components";

const RegisterPageStyled = styled.div`
  button {
    background-color: #2a9d8f;
    width: 100px;
    border-radius: 20px;
  }
  .avatars-container {
    display: flex;
  }
  h1 {
    padding-top: 30px;
  }

  @media (max-width: 440px) {
    .register-title {
      font-size: 20px;
    }
    .MuiAvatar-img {
      width: 50px;
      height: 50px;
    }
    .MuiAvatar-root {
      width: 50px;
      height: 50px;
    }
  }
  @media (min-width: 441px) {
    .register-title {
      font-size: 35px;
    }
    .register-input {
      width: 300px;
    }
    .form-container {
      justify-content: center;
    }
    .form-link {
      font-size: 20px;
    }
  }
`;
export default RegisterPageStyled;
