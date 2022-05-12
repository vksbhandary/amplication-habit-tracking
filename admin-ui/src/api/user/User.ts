import { Goal } from "../goal/Goal";

export type User = {
  createdAt: Date;
  firstName: string | null;
  goals?: Array<Goal>;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
