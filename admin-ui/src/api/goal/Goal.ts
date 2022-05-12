import { Todo } from "../todo/Todo";
import { User } from "../user/User";

export type Goal = {
  createdAt: Date;
  description: string | null;
  id: string;
  title: string;
  todos?: Array<Todo>;
  updatedAt: Date;
  user?: User | null;
};
