import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingDamageBeforeEventDetail = {
  source: EventSource;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export type EventSource = string;

export const cardEffectTimingDamageBeforeEventEmpty = (): CardEffectTimingDamageBeforeEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingDamageBeforeEventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
