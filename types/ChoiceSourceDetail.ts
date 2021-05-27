import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { ChoiceHow } from "./CardMetaData";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type ChoiceSourceDetail = {
  how: ChoiceHow["code"];
  numPicks: number;
  orPlayerConditions: PlayerConditionDetail[];
  orCardConditions: CardConditionDetail[];
};

export const choiceSourceEmpty = (): ChoiceSourceDetail => {
  return {
    how: globalCache.metadata!.choiceHowList[0].code,
    numPicks: 0,
    orPlayerConditions: [],
    orCardConditions: [],
  };
};
