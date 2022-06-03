import { Dog } from "../../interfaces/Dogs";

interface Props {
  dogs: Dog[];
}

export const DogList = ({ dogs }: Props) => {
  return (
    <ul>
      {dogs.map((dog) => {
        return <li key={dog.name}>{dog.name}</li>;
      })}
    </ul>
  );
};
