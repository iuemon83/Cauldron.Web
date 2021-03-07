import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type NumValueModifierDetail = {
  operator: Operator;
  value: NumValueDetail;
};

export const numValueModifierEmpty = (): NumValueModifierDetail => {
  return {
    operator: operators[0],
    value: numValueEmpty(),
  };
};

export const operators = ["add", "sub"] as const;
export type Operator = typeof operators[number];
