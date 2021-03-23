import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { ZoneValueDetail, zoneValueEmpty } from "./ZoneValueDetail";

export type CardEffectActionAddCardDetail = {
  zoneToAddCard: ZoneValueDetail;
  choice: ChoiceDetail;
};

export const CardEffectActionAddCardEmpty = (): CardEffectActionAddCardDetail => {
  return {
    zoneToAddCard: zoneValueEmpty(),
    choice: choiceEmpty(),
  };
};
