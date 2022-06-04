import { IDog } from "../interfaces/Dogs";

export class Dog implements IDog {
  constructor(
    public name: string,
    public picture: string,
    public age: number,
    public title: string,
    public toy: string,
    public weight: string
  ) {}
}
