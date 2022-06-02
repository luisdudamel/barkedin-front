import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const CredentialsValidation = () => {
  const { logged } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate("/login");
  });

  if (logged) {
    return;
  } else {
    return null;
  }
};

export default CredentialsValidation;
export {};
