import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MyDogsPageStyled from "./MyDogsPageStyled";
import { IDog } from "../../interfaces/Dogs";
import {
  getFavDogsThunk,
  loadMoreFavDogsThunk,
} from "../../redux/thunks/dogsThunks";
import { useEffect, useState } from "react";
import { UserState } from "../../interfaces/UserCredential";
import { DogList } from "../../components/DogList/DogList";
import { Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { ProfileBar } from "../../components/ProfileBar/ProfileBar";
import { LoadingBarLinear } from "../../components/LoadingBarLinear/LoadingBarLinear";
import { LoadButton } from "../../components/LoadButton/LoadButton";
import { NavBar } from "../../components/NavBar/Navbar";
import { NavBarDesktop } from "../../components/NavBarDesktop/NavBarDesktop";

const MyDogsPage = (): JSX.Element => {
  let initialPage = 1;
  const [page, setPage] = useState(initialPage);
  const loading = useAppSelector((state) => state.ui.loading);
  const currentFavDogs: IDog[] = useAppSelector((state) => state.dogs);
  const currentUser: UserState = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavDogsThunk(currentUser.username, 0));
  }, [currentUser, dispatch]);

  const loadMoreFavDogs = () => {
    setPage(page + 1);
    dispatch(loadMoreFavDogsThunk(currentUser.username, page));
  };

  const scrollToTop = () => {
    setPage(1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading && <LoadingBarLinear />}
      <div onClick={scrollToTop}>
        <NavBarDesktop />
      </div>
      <MyDogsPageStyled>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          mt={7}
        >
          <Header text="My dogs" />

          <ProfileBar />
          <DogList dogs={currentFavDogs}></DogList>
        </Stack>
        <div className="load-more-container" onClick={loadMoreFavDogs}>
          <LoadButton />
        </div>
        <div onClick={scrollToTop}>
          <NavBar />
        </div>
      </MyDogsPageStyled>
    </>
  );
};

export default MyDogsPage;
