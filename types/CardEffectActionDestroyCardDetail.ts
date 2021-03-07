import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type CardEffectActionDestroyCardDetail = {
  choice: ChoiceDetail;
};

export const CardEffectActionDestroyCardEmpty = (): CardEffectActionDestroyCardDetail => {
  return {
    choice: choiceEmpty(),
  };
};
