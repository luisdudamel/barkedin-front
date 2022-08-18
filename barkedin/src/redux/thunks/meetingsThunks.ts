import axios from "axios";
import { IMeeting } from "../../interfaces/Meetings";
import {
  deleteMeetingActionCreator,
  loadAllMeetingsActionCreator,
} from "../feature/meetingsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import { AppDispatch } from "../store";

export const getAllMeetingsThunk = () => async (dispatch: AppDispatch) => {
  const currentToken = localStorage.getItem("token");
  dispatch(loadingActionCreator({ loading: true }));
  try {
    const {
      data: { meetings: allMeetings },
    } = await axios.get(`${process.env.REACT_APP_API_URL_DEV}meetings`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });
    dispatch(loadAllMeetingsActionCreator(allMeetings));
  } catch (error) {
    dispatch(loadingActionCreator({ loading: false }));
  }
  dispatch(loadingActionCreator({ loading: false }));
};

export const getMeetingByIdThunk =
  (id: IMeeting["id"]) => async (dispatch: AppDispatch) => {
    const currentToken = localStorage.getItem("token");
    dispatch(loadingActionCreator({ loading: true }));
    try {
      const {
        data: { meeting },
        status,
      } = await axios.get(
        `${process.env.REACT_APP_API_URL_DEV}meetings/${id}`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        }
      );

      if (status === 200) {
        dispatch(loadingActionCreator({ loading: false }));
        return meeting;
      }
    } catch (error) {
      dispatch(loadingActionCreator({ loading: false }));
    }
    dispatch(loadingActionCreator({ loading: false }));
  };

export const deleteMeetingThunk =
  (id: IMeeting["id"]) => async (dispatch: AppDispatch) => {
    const currentToken = localStorage.getItem("token");
    dispatch(loadingActionCreator({ loading: true }));
    try {
      const { status } = await axios.delete(
        `${process.env.REACT_APP_API_URL_DEV}meetings/${id}`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        }
      );

      if (status === 200) {
        dispatch(deleteMeetingActionCreator(id));
      }
    } catch {}
    dispatch(loadingActionCreator({ loading: false }));
  };
