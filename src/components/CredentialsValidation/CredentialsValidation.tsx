import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../interfaces/UserCredential";
import { loginUserActionCreator } from "../../redux/feature/usersSlice";
import { useAppDispatch } from "../../redux/hooks";

interface Props {
  children: JSX.Element;
}

const CredentialsValidation = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  const userData = jwtDecode<UserState>(token as string);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else;
    dispatch(
      loginUserActionCreator({
        name: userData.name,
        id: userData.id,
        username: userData.username,
        logged: true,
      })
    );
  }, [
    dispatch,
    navigate,
    token,
    userData.id,
    userData.name,
    userData.username,
  ]);

  return children;
};

export default CredentialsValidation;
