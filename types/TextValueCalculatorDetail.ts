import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type TextValueCalculatorDetail = {
  type: ValueType;
  cardsChoice: ChoiceDetail;
};

export const valueTypes = ["cardName"] as const;
export type ValueType = typeof valueTypes[number];

export const textValueCalculatorEmpty = (): TextValueCalculatorDetail => {
  return {
    type: valueTypes[0],
    cardsChoice: choiceEmpty(),
  };
};
