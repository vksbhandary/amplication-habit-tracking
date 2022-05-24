import { SortOrder } from "../../util/SortOrder";

export type ActionOrderByInput = {
  createdAt?: SortOrder;
  end?: SortOrder;
  id?: SortOrder;
  minutes?: SortOrder;
  start?: SortOrder;
  status?: SortOrder;
  todoId?: SortOrder;
  updatedAt?: SortOrder;
  xp?: SortOrder;
};
