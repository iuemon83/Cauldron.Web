import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingDamageBeforeEventDetail = {
  type: DamageType;
  source: EventSource;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export type DamageType = string;
export type EventSource = string;

export const cardEffectTimingDamageBeforeEventEmpty = (): CardEffectTimingDamageBeforeEventDetail => {
  return {
    type: globalCache.metadata!.effectTimingDamageBeforeDamageTypes[0],
    source: globalCache.metadata!.effectTimingDamageBeforeEventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
