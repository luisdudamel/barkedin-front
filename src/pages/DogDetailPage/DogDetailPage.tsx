import { useParams } from "react-router-dom";
import { DogDetail } from "../../components/DogDetail/DogDetail";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/Navbar";
import { useAppSelector } from "../../redux/hooks";

export const DogDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const currentDog = useAppSelector((state) =>
    state.dogs.find((dog) => dog.id === id)
  );

  return (
    <>
      <Header text={currentDog?.name} />
      <DogDetail dog={currentDog} />
      <NavBar />
    </>
  );
};
