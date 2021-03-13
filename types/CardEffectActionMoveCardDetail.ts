import { globalCache } from "../components/CauldronApi";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { ZoneName } from "./ZoneValueDetail";

export type CardEffectActionMoveCardDetail = {
  cardsChoice: ChoiceDetail;
  to: ZoneName;
};

export const cardEffectActionMoveCardEmpty = (): CardEffectActionMoveCardDetail => {
  return {
    cardsChoice: choiceEmpty(),
    to: globalCache.metadata!.zoneNames[0],
  };
};
