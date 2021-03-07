import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type CardEffectActionDamageDetail = {
  value: number;
  choice: ChoiceDetail;
};

export const CardEffectActionDamageEmpty = (): CardEffectActionDamageDetail => {
  return {
    value: 0,
    choice: choiceEmpty(),
  };
};
