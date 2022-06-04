import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserActionCreator } from "../../redux/feature/usersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface Props {
  children: JSX.Element;
}

const CredentialsValidation = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  try {
    const userData = jwtDecode<any>(token as string);

    dispatch(
      loginUserActionCreator({
        name: userData.name,
        id: userData.id,
        username: userData.username,
        logged: true,
      })
    );
    return children;
  } catch (error) {
    navigate("/login");
  }
  return null;
};

export default CredentialsValidation;
