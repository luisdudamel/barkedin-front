import { Stack } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import { DogList } from "../../components/DogList/DogList";
import { Header } from "../../components/Header/Header";
import { LoadButton } from "../../components/LoadButton/LoadButton";
import { LoadingBarLinear } from "../../components/LoadingBarLinear/LoadingBarLinear";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MyDogsPageStyled from "../MyDogsPage/MyDogsPageStyled";
import { UserState } from "../../interfaces/UserCredential";
import {
  getAllDogsThunk,
  loadMoreAllDogsThunk,
} from "../../redux/thunks/dogsThunks";
import { useEffect, useState } from "react";
import { FilterBar } from "../../components/FilterBar/FilterBar";

const HomePage = (): JSX.Element => {
  let initialPage = 1;

  const [page, setPage] = useState(initialPage);
  const loading = useAppSelector((state) => state.ui.loading);
  const currentDogs: IDog[] = useAppSelector((state) => state.dogs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDogsThunk(0));
  }, [dispatch]);

  const loadMoreAllDogs = () => {
    setPage(page + 1);
    dispatch(loadMoreAllDogsThunk(page));
  };

  const scrollToTop = () => {
    setPage(1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading && <LoadingBarLinear />}
      <MyDogsPageStyled>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Header text="My dogs" />
          <FilterBar />

          <DogList dogs={currentDogs}></DogList>
        </Stack>
        <div className="load-more-container" onClick={loadMoreAllDogs}>
          <LoadButton />
        </div>
        <div onClick={() => scrollToTop()}>
          <NavBar />
        </div>
      </MyDogsPageStyled>
    </>
  );
};

export default HomePage;
