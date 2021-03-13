import { globalCache } from "../components/CauldronApi";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type TextValueCalculatorDetail = {
  type: ValueType;
  cardsChoice: ChoiceDetail;
};

export type ValueType = string;

export const textValueCalculatorEmpty = (): TextValueCalculatorDetail => {
  return {
    type: globalCache.metadata!.textValueCalculatorValueTypes[0],
    cardsChoice: choiceEmpty(),
  };
};
