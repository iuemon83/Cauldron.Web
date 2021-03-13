import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type ChoiceDetail = {
  how: ChoiceHow;
  numPicks: number;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export type ChoiceHow = string;

export const choiceEmpty = (): ChoiceDetail => {
  return {
    how: globalCache.metadata!.choiceHowList[0],
    numPicks: 0,
    cardCondition: undefined,
    playerCondition: undefined,
  };
};
