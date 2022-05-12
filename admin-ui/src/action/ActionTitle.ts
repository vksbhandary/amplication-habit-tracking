import { Action as TAction } from "../api/action/Action";

export const ACTION_TITLE_FIELD = "id";

export const ActionTitle = (record: TAction): string => {
  return record.id || record.id;
};
