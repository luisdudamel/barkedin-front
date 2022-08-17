import { IDog } from "./Dogs";

export interface IMeeting {
  dog: Partial<IDog>;
  creator: string;
  day: string;
  description: string;
  location: string;
  id: string | undefined;
}
