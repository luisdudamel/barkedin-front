import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MyDogsPageStyled from "./MyDogsPageStyled";
import { Dog } from "../../interfaces/Dogs";
import { getFavDogsThunk } from "../../redux/thunks/dogsThunks";
import { useEffect } from "react";
import { UserState } from "../../interfaces/UserCredential";

const MyDogsPage = (): JSX.Element => {
  const currentFavDogs: Dog[] = useAppSelector((state) => state.dogs);
  const currentUser: UserState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavDogsThunk(currentUser.username));
  }, [currentUser.username, dispatch]);

  return (
    <>
      <MyDogsPageStyled>
        <ul>
          {currentFavDogs.map((dog) => {
            return <li key={dog.name}>{dog.name}</li>;
          })}
        </ul>
      </MyDogsPageStyled>
    </>
  );
};

export default MyDogsPage;
