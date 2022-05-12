import { ActionWhereInput } from "./ActionWhereInput";
import { ActionOrderByInput } from "./ActionOrderByInput";

export type ActionFindManyArgs = {
  where?: ActionWhereInput;
  orderBy?: Array<ActionOrderByInput>;
  skip?: number;
  take?: number;
};
