import { Todo as TTodo } from "../api/todo/Todo";

export const TODO_TITLE_FIELD = "title";

export const TodoTitle = (record: TTodo): string => {
  return record.title || record.id;
};
