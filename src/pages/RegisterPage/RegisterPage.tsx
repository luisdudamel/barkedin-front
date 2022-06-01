import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
