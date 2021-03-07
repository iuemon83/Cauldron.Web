import { NumValueDetail, numValueEmpty } from "./NumValueDetail";
import {
  PlayerConditionDetail,
  playerConditionEmpty,
} from "./PlayerConditionDetail";

export type CardEffectActionDrawCardDetail = {
  numCards: NumValueDetail;
  playerCondition: PlayerConditionDetail;
};

export const CardEffectActionDrawCardEmpty = (): CardEffectActionDrawCardDetail => {
  return {
    numCards: numValueEmpty(),
    playerCondition: playerConditionEmpty(),
  };
};
