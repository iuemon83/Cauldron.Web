import { globalCache } from "../components/CauldronApi";
import { TextValueCalculatorValueType } from "./CardMetaData";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type TextValueCalculatorDetail = {
  type: TextValueCalculatorValueType["code"];
  cardsChoice: ChoiceDetail;
};

export const textValueCalculatorEmpty = (): TextValueCalculatorDetail => {
  return {
    type: globalCache.metadata!.textValueCalculatorValueTypes[0].code,
    cardsChoice: choiceEmpty(),
  };
};
