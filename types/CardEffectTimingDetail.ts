import { CardEffectTimingDamageBeforeEventDetail } from "./CardEffectTimingDamageBeforeEventDetail";
import { CardEffectTimingDestroyEventDetail } from "./CardEffectTimingDestroyEventDetail";
import { CardEffectTimingEndTurnEventDetail } from "./CardEffectTimingEndTurnEventDetail";
import { CardEffectTimingMoveCardEventDetail } from "./CardEffectTimingMoveCardEventDetail";
import { CardEffectTimingPlayEventDetail } from "./CardEffectTimingPlayEventDetail";
import { CardEffectTimingStartTurnEventDetail } from "./CardEffectTimingStartTurnEventDetail";

export type CardEffectTimingDetail = {
  startTurn: CardEffectTimingStartTurnEventDetail | undefined;
  endTurn: CardEffectTimingEndTurnEventDetail | undefined;
  play: CardEffectTimingPlayEventDetail | undefined;
  moveCard: CardEffectTimingMoveCardEventDetail | undefined;
  destroy: CardEffectTimingDestroyEventDetail | undefined;
  damageBefore: CardEffectTimingDamageBeforeEventDetail | undefined;
};

export const CardEffectTimingEmpty = (): CardEffectTimingDetail => {
  return {
    startTurn: undefined,
    endTurn: undefined,
    play: undefined,
    moveCard: undefined,
    destroy: undefined,
    damageBefore: undefined,
  };
};

export type EffectActionType = keyof CardEffectTimingDetail;
