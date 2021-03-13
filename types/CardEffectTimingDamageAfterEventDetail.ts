import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingDamageAfterEventDetail = {
  source: EventSource;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};
// export const eventSources = ["all", "damageSource", "guard"] as const;
export type EventSource = string;
//  typeof eventSources[number];

export const EventEmpty = (): CardEffectTimingDamageAfterEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingDamageAfterEventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
