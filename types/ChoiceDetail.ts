import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type ChoiceDetail = {
  how: ChoiceHow;
  numPicks: number;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export const howList = ["all", "random", "choose"] as const;
export type ChoiceHow = typeof howList[number];

export const choiceEmpty = (): ChoiceDetail => {
  return {
    how: howList[0],
    numPicks: 0,
    cardCondition: undefined,
    playerCondition: undefined,
  };
};
