import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingDamageBeforeEventDetail = {
  source: EventSource;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};
export const eventSources = ["all", "damageSource", "guard"] as const;
export type EventSource = typeof eventSources[number];

export const CardEffectTimingDamageBeforeEventEmpty = (): CardEffectTimingDamageBeforeEventDetail => {
  return {
    source: eventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
