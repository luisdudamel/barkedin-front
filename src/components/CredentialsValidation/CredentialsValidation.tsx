import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  children: JSX.Element;
}

const CredentialsValidation = ({ children }: Props) => {
  const { logged } = useAppSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged || !token) navigate("/login");
  }, [logged, navigate, token]);

  if (token) {
    return children;
  }
};

export default CredentialsValidation;
