import {
  CardEffectActionDetail,
  cardEffectActionEmpty,
} from "./CardEffectActionDetail";
import { CardEffectConditionDetail } from "./CardEffectConditionDetail";
import { zoneNames } from "./ZoneValueDetail";

export type CardEffectDetail = {
  condition: CardEffectConditionDetail;
  actions: CardEffectActionDetail[];
};

export const cardEffectEmpty = (): CardEffectDetail => {
  return {
    condition: {
      zonePrettyName: zoneNames[0],
      when: undefined,
      while: undefined,
      if: undefined,
    },
    actions: [cardEffectActionEmpty()],
  };
};
