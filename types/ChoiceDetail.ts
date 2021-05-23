import { globalCache } from "../components/CauldronApi";
import { ChoiceSourceDetail, choiceSourceEmpty } from "./ChoiceSourceDetail";

export type ChoiceDetail = {
  how: ChoiceHow;
  numPicks: number;
  source: ChoiceSourceDetail;
};

export type ChoiceHow = string;

export const choiceEmpty = (): ChoiceDetail => {
  return {
    how: globalCache.metadata!.choiceHowList[0],
    numPicks: 0,
    source: choiceSourceEmpty(),
  };
};
