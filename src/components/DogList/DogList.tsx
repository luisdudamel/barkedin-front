import { Grid } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import { Dog } from "../Dog/Dog";

interface DogListProps {
  dogs: IDog[];
}

export const DogList = ({ dogs }: DogListProps): JSX.Element => {
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
            <Grid
              className="dogs-grid"
              xs={12}
              md={4}
              lg={3}
              margin={3}
              key={dog.id}
              item
            >
              <Dog dog={dog}></Dog>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
