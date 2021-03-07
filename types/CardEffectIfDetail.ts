import { NumConditionDetail, numConditionEmpty } from "./NumConditionDetail";

export type CardEffectIfDetail = {
  numCondition: NumConditionDetail;
  numValue: number;
};

export const CardEffectIfEmpty = (): CardEffectIfDetail => {
  return {
    numCondition: numConditionEmpty(),
    numValue: 0,
  };
};
