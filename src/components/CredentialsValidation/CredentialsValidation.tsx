import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
interface Props {
  children: JSX.Element;
}

const CredentialsValidation = ({ children }: Props) => {
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  return children;
};

export default CredentialsValidation;
