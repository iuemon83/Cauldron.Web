import { globalCache } from "../components/CauldronApi";
import {
  CardEffectActionDetail,
  cardEffectActionEmpty,
} from "./CardEffectActionDetail";
import { CardEffectConditionDetail } from "./CardEffectConditionDetail";

export type CardEffectDetail = {
  condition: CardEffectConditionDetail;
  actions: CardEffectActionDetail[];
};

export const cardEffectEmpty = (): CardEffectDetail => {
  return {
    condition: {
      zonePrettyName: globalCache.metadata!.zoneNames[0],
      when: undefined,
      while: undefined,
      if: undefined,
    },
    actions: [cardEffectActionEmpty()],
  };
};
