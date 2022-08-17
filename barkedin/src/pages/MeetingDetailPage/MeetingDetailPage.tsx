import { useParams } from "react-router-dom";
import { DogDetail } from "../../components/DogDetail/DogDetail";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MeetingDetailPageStyled from "./MeetingDetailPageStyled";
import { useEffect, useState } from "react";
import { NavBarDesktop } from "../../components/NavBarDesktop/NavBarDesktop";
import { getMeetingByIdThunk } from "../../redux/thunks/meetingsThunks";
import { IMeeting } from "../../interfaces/Meetings";
import { MeetingDetail } from "../../components/MeetingDetail/MeetingDetail";

export const MeetingDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const initialMeetingDetail: IMeeting = {
    creator: "",
    day: "",
    description: "",
    dog: { name: "" },
    id: "",
    location: "",
  };
  const [actualMeeting, setActualMeeting] = useState(initialMeetingDetail);
  const userId = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      console.log("Paso por aqui");
      try {
        const meetingToShow: any = await dispatch(getMeetingByIdThunk(id));
        console.log(meetingToShow);
        setActualMeeting(meetingToShow);
      } catch {}
    })();
  }, [dispatch, id]);

  const isOwn = userId === actualMeeting.creator;

  return (
    <>
      <NavBarDesktop />
      <MeetingDetailPageStyled>
        <Header text={`${actualMeeting?.dog.name}'s meeting!`} />
        <MeetingDetail
          meetingToShow={actualMeeting || initialMeetingDetail}
          isOwnMeting={isOwn}
        />
      </MeetingDetailPageStyled>
      <NavBar />
    </>
  );
};
