import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { NumValueModifierDetail } from "./NumValueModifierDetail";

export type CardEffectActionModifyCardDetail = {
  cost: NumValueModifierDetail | undefined;
  power: NumValueModifierDetail | undefined;
  toughness: NumValueModifierDetail | undefined;
  choice: ChoiceDetail;
};

export const CardEffectActionModifyCardEmpty = (): CardEffectActionModifyCardDetail => {
  return {
    cost: undefined,
    power: undefined,
    toughness: undefined,
    choice: choiceEmpty(),
  };
};
