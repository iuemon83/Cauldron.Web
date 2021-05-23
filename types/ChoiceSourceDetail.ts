import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type ChoiceSourceDetail = {
  how: ChoiceHow;
  numPicks: number;
  orPlayerConditions: PlayerConditionDetail[];
  orCardConditions: CardConditionDetail[];
};

export type ChoiceHow = string;

export const choiceSourceEmpty = (): ChoiceSourceDetail => {
  return {
    how: globalCache.metadata!.choiceHowList[0],
    numPicks: 0,
    orPlayerConditions: [],
    orCardConditions: [],
  };
};
