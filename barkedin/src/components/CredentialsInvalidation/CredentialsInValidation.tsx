import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface CredentialsInvalidationProps {
  children: JSX.Element;
}

const CredentialsInValidation = ({
  children,
}: CredentialsInvalidationProps) => {
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/barkedin/profile");
    }
  }, [logged, navigate]);

  return children;
};

export default CredentialsInValidation;
