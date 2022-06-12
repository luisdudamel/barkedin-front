import { useParams } from "react-router-dom";
import { DogDetail } from "../../components/DogDetail/DogDetail";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
    owner: "",
  };
  const { id } = useParams();
  const [actualDog, setActualDog] = useState(initialDogDetail);
  const userId = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { dog: dogToShow }: any = await dispatch(getDogByIdThunk(id));
        setActualDog(dogToShow);
      } catch {}
    })();
  }, [dispatch, id]);

  const isOwn = userId === actualDog.owner;

  return (
    <>
      <StyledDogDetailPage>
        <Header text={`${actualDog?.name}'s profile`} />
        <DogDetail dogToShow={actualDog || initialDogDetail} isOwnDog={isOwn} />
      </StyledDogDetailPage>
      <NavBar />
    </>
  );
};
