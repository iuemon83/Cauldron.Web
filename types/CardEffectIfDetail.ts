import { NumConditionDetail, numConditionEmpty } from "./NumConditionDetail";
import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type CardEffectIfDetail = {
  numCondition: NumConditionDetail;
  numValue: NumValueDetail;
};

export const CardEffectIfEmpty = (): CardEffectIfDetail => {
  return {
    numCondition: numConditionEmpty(),
    numValue: numValueEmpty(),
  };
};
