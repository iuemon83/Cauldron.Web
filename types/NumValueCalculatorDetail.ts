import { globalCache } from "../components/CauldronApi";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type NumValueCalculatorDetail = {
  type: ValueType;
  cardsChoice: ChoiceDetail;
};

export type ValueType = string;

export const numValueCalculatorEmpty = (): NumValueCalculatorDetail => {
  return {
    type: globalCache.metadata!.numValueCalculatorValueTypes[0],
    cardsChoice: choiceEmpty(),
  };
};
