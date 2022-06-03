import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MyDogsPageStyled from "./MyDogsPageStyled";
import { Dog } from "../../interfaces/Dogs";
import { getFavDogsThunk } from "../../redux/thunks/dogsThunks";
import { useEffect } from "react";

const MyDogsPage = (): JSX.Element => {
  const currentFavDogs: Dog[] = useAppSelector((state) => state.dogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getFavDogsThunk(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVpcyIsInVzZXJuYW1lIjoibHVpczEiLCJpZCI6IjYyOTY2MDM2Yjc0OTY5MjUxNDk2YmZmZCIsImlhdCI6MTY1NDE5ODQyNn0.H3MfL22YtoY3QFKSl11V7H_2DBhD6pB64O75Hllm2O8"
      )
    );
  }, [dispatch]);
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
