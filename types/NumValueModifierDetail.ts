import { globalCache } from "../components/CauldronApi";
import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type NumValueModifierDetail = {
  operator: Operator;
  value: NumValueDetail;
};

export type Operator = string;

export const numValueModifierEmpty = (): NumValueModifierDetail => {
  return {
    operator: globalCache.metadata!.numValueModifierOperators[0],
    value: numValueEmpty(),
  };
};
