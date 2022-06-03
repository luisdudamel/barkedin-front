import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../interfaces/UserCredential";
import { loginUserActionCreator } from "../../redux/feature/usersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface Props {
  children: JSX.Element;
}

const CredentialsValidation = ({ children }: Props) => {
  const user = useAppSelector<UserState>((state) => state.user);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token && !user.logged) navigate("/login");

    dispatch(
      loginUserActionCreator({
        name: user.name,
        id: user.id,
        username: user.username,
        logged: true,
      })
    );
  }, [
    dispatch,
    navigate,
    token,
    user.id,
    user.logged,
    user.name,
    user.username,
  ]);

  return children;
};

export default CredentialsValidation;
