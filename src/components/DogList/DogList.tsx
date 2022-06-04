import { Grid } from "@mui/material";
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
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        {dogs.map((dog) => {
          return (
            <Grid key={dog.name} item>
              <DogCard dog={dog}></DogCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
