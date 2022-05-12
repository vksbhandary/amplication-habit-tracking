import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  allotedTime?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  end?: SortOrder;
  goalId?: SortOrder;
  id?: SortOrder;
  repeateBasis?: SortOrder;
  repeated?: SortOrder;
  start?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
