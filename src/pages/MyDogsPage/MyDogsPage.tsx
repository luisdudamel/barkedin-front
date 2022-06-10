import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MyDogsPageStyled from "./MyDogsPageStyled";
import { IDog } from "../../interfaces/Dogs";
import { getFavDogsThunk } from "../../redux/thunks/dogsThunks";
import { useEffect } from "react";
import { UserState } from "../../interfaces/UserCredential";
import { DogList } from "../../components/DogList/DogList";
import { Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { ProfileBar } from "../../components/ProfileBar/ProfileBar";

const MyDogsPage = (): JSX.Element => {
  const currentFavDogs: IDog[] = useAppSelector((state) => state.dogs);
  const currentUser: UserState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavDogsThunk(currentUser.username));
  }, [currentUser.username, dispatch]);

  return (
    <>
      <MyDogsPageStyled>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Header text="My dogs" />
          <ProfileBar />
          <DogList dogs={currentFavDogs}></DogList>
        </Stack>
      </MyDogsPageStyled>
    </>
  );
};

export default MyDogsPage;
