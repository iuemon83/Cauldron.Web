import { globalCache } from "../components/CauldronApi";
import { NumValueCalculatorValueType } from "./CardMetaData";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type NumValueCalculatorDetail = {
  type: NumValueCalculatorValueType["code"];
  cardsChoice: ChoiceDetail;
};

export const numValueCalculatorEmpty = (): NumValueCalculatorDetail => {
  return {
    type: globalCache.metadata!.numValueCalculatorValueTypes[0].code,
    cardsChoice: choiceEmpty(),
  };
};
