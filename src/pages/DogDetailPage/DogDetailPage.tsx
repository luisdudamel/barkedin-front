import { useParams } from "react-router-dom";
import { DogDetail } from "../../components/DogDetail/DogDetail";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppSelector } from "../../redux/hooks";
import { IDog } from "../../interfaces/Dogs";
import StyledDogDetailPage from "./DogDetailPageStyled";

export const DogDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const currentDogs = useAppSelector((state) => state.dogs);
  const currentDogToShow = currentDogs.find((dog) => dog.id === id);

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

  return (
    <>
      <StyledDogDetailPage>
        <Header text={`${currentDogToShow?.name}'s profile`} />
        <DogDetail dogToShow={currentDogToShow || initialDogDetail} />
      </StyledDogDetailPage>
      <NavBar />
    </>
  );
};
