import { useAppSelector } from "../../redux/hooks";
import MyDogsPageStyled from "./MyDogsPageStyled";
import { Dog } from "../../interfaces/Dogs";

const MyDogsPage = (): JSX.Element => {
  const currentFavDogs: Dog[] = useAppSelector((state) => state.dogs);

  console.log(currentFavDogs);
  return (
    <>
      <MyDogsPageStyled>
        <ul>
          {currentFavDogs.map((dog) => {
            return <li>{dog.name}</li>;
          })}
        </ul>
      </MyDogsPageStyled>
    </>
  );
};

export default MyDogsPage;
