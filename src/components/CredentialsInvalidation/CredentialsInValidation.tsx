import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
interface Props {
  children: JSX.Element;
}

const CredentialsInValidation = ({ children }: Props) => {
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/profile");
    }
  }, [logged, navigate]);

  return children;
};

export default CredentialsInValidation;
