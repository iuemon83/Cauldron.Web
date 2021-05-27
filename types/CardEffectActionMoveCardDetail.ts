import { globalCache } from "../components/CauldronApi";
import { ZoneName } from "./CardMetaData";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type CardEffectActionMoveCardDetail = {
  cardsChoice: ChoiceDetail;
  to: ZoneName["code"];
};

export const cardEffectActionMoveCardEmpty =
  (): CardEffectActionMoveCardDetail => {
    return {
      cardsChoice: choiceEmpty(),
      to: globalCache.metadata!.zoneNames[0].code,
    };
  };
