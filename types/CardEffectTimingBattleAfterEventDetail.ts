import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingBattleAfterEventDetail = {
  source: EventSource;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};
// export const eventSources = ["all", "damageSource", "guard"] as const;
export type EventSource = string;

export const EventEmpty = (): CardEffectTimingBattleAfterEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingBattleAfterEventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
