import { Todo } from "../todo/Todo";

export type Action = {
  createdAt: Date;
  end: Date | null;
  id: string;
  minutes: number | null;
  start: Date | null;
  status?: "Completed" | "Skipped" | null;
  todo?: Todo | null;
  updatedAt: Date;
  xp: number | null;
};
