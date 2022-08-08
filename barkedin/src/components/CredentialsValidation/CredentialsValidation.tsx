import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
interface CredentialsValidationProps {
  children: JSX.Element;
}

const CredentialsValidation = ({ children }: CredentialsValidationProps) => {
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/barkedin/login");
    }
  }, [logged, navigate]);

  return children;
};

export default CredentialsValidation;
