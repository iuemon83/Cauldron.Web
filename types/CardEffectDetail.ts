import {
  CardEffectActionDetail,
  cardEffectActionEmpty,
} from "./CardEffectActionDetail";
import {
  CardEffectConditionDetail,
  CardEffectConditionEmpty,
} from "./CardEffectConditionDetail";

export type CardEffectDetail = {
  condition: CardEffectConditionDetail;
  actions: CardEffectActionDetail[];
};

export const cardEffectEmpty = (): CardEffectDetail => {
  return {
    condition: CardEffectConditionEmpty(),
    actions: [cardEffectActionEmpty()],
  };
};
