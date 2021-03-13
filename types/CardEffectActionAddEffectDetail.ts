import { CardEffectDetail, cardEffectEmpty } from "./CardEffectDetail";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type CardEffectActionAddEffectDetail = {
  cardsChoice: ChoiceDetail;
  effectToAdd: CardEffectDetail[];
};

export const cardEffectActionAddEffectEmpty = (): CardEffectActionAddEffectDetail => {
  return {
    cardsChoice: choiceEmpty(),
    effectToAdd: [cardEffectEmpty()],
  };
};
