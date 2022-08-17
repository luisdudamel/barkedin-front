import { IDog } from "./Dogs";

export interface IMeeting {
  dog: IDog;
  creator: string;
  day: string;
  description: string;
  location: string;
  id: string | undefined;
}
