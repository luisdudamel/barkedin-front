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
        className="dogs-grid"
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        {dogs.map((dog) => {
          return (
            <Grid xs={12} sm={5} md={4} lg={3} margin={1} key={dog.name} item>
              <DogCard dog={dog}></DogCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
