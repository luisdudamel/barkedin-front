import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserActionCreator } from "../../redux/feature/usersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface Props {
  children: JSX.Element;
}

const CredentialsValidation = ({ children }: Props) => {
  const user = useAppSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (!user.logged || !token) navigate("/login");

  useEffect(() => {
    dispatch(
      loginUserActionCreator({
        name: user.name,
        id: user.id,
        username: user.username,
        logged: true,
      })
    );
  }, [dispatch, user.id, user.name, user.username]);

  return children;
};

export default CredentialsValidation;
