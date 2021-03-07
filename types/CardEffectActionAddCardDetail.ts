import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { ZoneValueDetail, zoneValueEmpty } from "./ZoneValueDetail";

export type CardEffectActionAddCardDetail = {
  zoneToAdd: ZoneValueDetail;
  choice: ChoiceDetail;
};

export const CardEffectActionAddCardEmpty = (): CardEffectActionAddCardDetail => {
  return {
    zoneToAdd: zoneValueEmpty(),
    choice: choiceEmpty(),
  };
};
