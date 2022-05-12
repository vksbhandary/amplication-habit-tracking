import { Todo } from "../todo/Todo";

export type Action = {
  createdAt: Date;
  end: Date | null;
  id: string;
  start: Date | null;
  status?: "Completed" | "Skipped" | null;
  todo?: Todo | null;
  updatedAt: Date;
};
