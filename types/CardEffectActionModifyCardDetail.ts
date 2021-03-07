import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type CardEffectActionModifyCardDetail = {
  power: NumValueDetail;
  toughness: NumValueDetail;
  choice: ChoiceDetail;
};

export const CardEffectActionModifyCardEmpty = (): CardEffectActionModifyCardDetail => {
  return {
    power: numValueEmpty(),
    toughness: numValueEmpty(),
    choice: choiceEmpty(),
  };
};
