import { Grid } from "@mui/material";
import { Dog } from "../../classes/Dog";
import { IDog } from "../../interfaces/Dogs";
import { DogCard } from "../Dog/Dog";

interface Props {
  dogs: IDog[];
}

export const DogList = ({ dogs }: Props): JSX.Element => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {dogs.map((dog) => {
          return <DogCard dog={dog}></DogCard>;
        })}
      </Grid>
    </>
  );
};
