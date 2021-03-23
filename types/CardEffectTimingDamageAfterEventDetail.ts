import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingDamageAfterEventDetail = {
  type: DamageType;
  source: EventSource;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export type DamageType = string;
export type EventSource = string;

export const EventEmpty = (): CardEffectTimingDamageAfterEventDetail => {
  return {
    type: globalCache.metadata!.effectTimingDamageAfterDamageTypes[0],
    source: globalCache.metadata!.effectTimingDamageAfterEventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
