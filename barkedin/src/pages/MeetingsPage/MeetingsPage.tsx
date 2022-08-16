import { Stack } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import { Header } from "../../components/Header/Header";
import { LoadButton } from "../../components/LoadButton/LoadButton";
import { LoadingBarLinear } from "../../components/LoadingBarLinear/LoadingBarLinear";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getAllDogsThunk,
  loadMoreAllDogsThunk,
} from "../../redux/thunks/dogsThunks";
import { useEffect, useState } from "react";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { UserState } from "../../interfaces/UserCredential";
import { NavBarDesktop } from "../../components/NavBarDesktop/NavBarDesktop";
import MeetingsPageStyled from "./MeetingsPageStyled";
import { MeetingsList } from "../../components/MeetingsList/MeetingsList";
import { getAllMeetingsThunk } from "../../redux/thunks/meetingsThunks";

const MeetingsPage = (): JSX.Element => {
  let initialPage = 1;
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(initialPage);
  const loading = useAppSelector((state) => state.ui.loading);
  const currentDogs: IDog[] = useAppSelector((state) => state.dogs);
  const currentUser: UserState = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMeetingsThunk());
  }, [dispatch]);

  const loadMoreAllDogs = () => {
    setPage(page + 1);
    dispatch(loadMoreAllDogsThunk(page, filter));
  };

  const chooseFilter = (filterToSet: string): void => {
    setFilter(filterToSet);
    dispatch(getAllDogsThunk(0, filterToSet));
  };

  const scrollTop = () => {
    setPage(1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading && <LoadingBarLinear />}
      <div onClick={scrollTop}>
        <NavBarDesktop />
      </div>
      <MeetingsPageStyled>
        <Stack
          className="header-text"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Header text="All meetings" />
          <div className="filter-bar">
            <FilterBar filterAction={chooseFilter} />
          </div>
          <MeetingsList dogs={currentDogs}></MeetingsList>
        </Stack>

        {currentDogs.length > 5 && (
          <div className="load-more-container" onClick={loadMoreAllDogs}>
            <LoadButton />
          </div>
        )}
        <div onClick={scrollTop}>
          <NavBar />
        </div>
      </MeetingsPageStyled>
    </>
  );
};

export default MeetingsPage;