import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import {
  PlayerModifierDetail,
  playerModifierEmpty,
} from "./PlayerModifierDetail";

export type CardEffectActionModifyPlayerDetail = {
  playerModifier: PlayerModifierDetail;
  choice: ChoiceDetail;
};

export const cardEffectActionModifyPlayerEmpty = (): CardEffectActionModifyPlayerDetail => {
  return {
    playerModifier: playerModifierEmpty(),
    choice: choiceEmpty(),
  };
};
