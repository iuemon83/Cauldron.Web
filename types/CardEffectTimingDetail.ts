import { CardEffectTimingPlayEventDetail } from "./CardEffectTimingPlayEventDetail";
import { CardEffectTimingStartTurnEventDetail } from "./CardEffectTimingStartTurnEventDetail";

export type CardEffectTimingDetail = {
  startTurn: CardEffectTimingStartTurnEventDetail | undefined;
  play: CardEffectTimingPlayEventDetail | undefined;
};

export const CardEffectTimingEmpty = (): CardEffectTimingDetail => {
  return {
    play: undefined,
    startTurn: undefined,
  };
};
