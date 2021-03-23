import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type CardEffectActionDamageDetail = {
  value: NumValueDetail;
  choice: ChoiceDetail;
};

export const CardEffectActionDamageEmpty = (): CardEffectActionDamageDetail => {
  return {
    value: numValueEmpty(),
    choice: choiceEmpty(),
  };
};
