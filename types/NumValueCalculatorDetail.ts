import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type NumValueCalculatorDetail = {
  type: ValueType;
  cardsChoice: ChoiceDetail;
};

export const numValueCalculatorEmpty = (): NumValueCalculatorDetail => {
  return {
    type: valueTypes[0],
    cardsChoice: choiceEmpty(),
  };
};

export const valueTypes = ["count", "cardCost"] as const;
export type ValueType = typeof valueTypes[number];
