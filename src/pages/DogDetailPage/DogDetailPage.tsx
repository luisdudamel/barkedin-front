import { useParams } from "react-router-dom";
import { DogDetail } from "../../components/DogDetail/DogDetail";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppDispatch } from "../../redux/hooks";
import { IDog } from "../../interfaces/Dogs";
import StyledDogDetailPage from "./StyledDogDetailPage";
import { getDogByIdThunk } from "../../redux/thunks/dogsThunks";
import { useEffect, useState } from "react";

export const DogDetailPage = (): JSX.Element => {
  const initialDogDetail: IDog = {
    name: "",
    age: 0,
    bio: "",
    breed: "",
    id: "",
    personality: "",
    picture: "",
    title: "",
    toy: "",
    weight: "",
  };
  const { id } = useParams();
  const [actualDog, setActualDog] = useState(initialDogDetail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { dog: dogToShow }: any = await dispatch(getDogByIdThunk(id));
        setActualDog(dogToShow);
      } catch {}
    })();
  }, [dispatch, id]);
  return (
    <>
      <StyledDogDetailPage>
        <Header text={`${actualDog?.name}'s profile`} />
        <DogDetail dogToShow={actualDog || initialDogDetail} />
      </StyledDogDetailPage>
      <NavBar />
    </>
  );
};
