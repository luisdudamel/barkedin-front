import { Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { LoadingBarLinear } from "../../components/LoadingBarLinear/LoadingBarLinear";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

import { NavBarDesktop } from "../../components/NavBarDesktop/NavBarDesktop";
import MeetingsPageStyled from "./MeetingsPageStyled";
import { MeetingsList } from "../../components/MeetingsList/MeetingsList";
import { getAllMeetingsThunk } from "../../redux/thunks/meetingsThunks";

const MeetingsPage = (): JSX.Element => {
  const loading = useAppSelector((state) => state.ui.loading);
  const currentMeetings = useAppSelector((state) => state.meetings);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMeetingsThunk());
  }, [dispatch]);

  const scrollTop = () => {
    window.scrollTo(0, 0);
    dispatch(getAllMeetingsThunk());
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
            {/* <FilterBar filterAction={chooseFilter} /> */}
          </div>
          <MeetingsList meetings={currentMeetings}></MeetingsList>
        </Stack>

        {/* {currentMeetings.length > 5 && (
          <div className="load-more-container" onClick={loadMoreAllDogs}>
            <LoadButton />
          </div>
        )} */}
        <div onClick={scrollTop}>
          <NavBar />
        </div>
      </MeetingsPageStyled>
    </>
  );
};

export default MeetingsPage;
