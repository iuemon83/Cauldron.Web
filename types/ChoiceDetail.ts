import { globalCache } from "../components/CauldronApi";
import { ChoiceHow } from "./CardMetaData";
import { ChoiceSourceDetail, choiceSourceEmpty } from "./ChoiceSourceDetail";

export type ChoiceDetail = {
  how: ChoiceHow["code"];
  numPicks: number;
  source: ChoiceSourceDetail;
};

export const choiceEmpty = (): ChoiceDetail => {
  return {
    how: globalCache.metadata!.choiceHowList[0].code,
    numPicks: 0,
    source: choiceSourceEmpty(),
  };
};
