import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import {
  CardEffectTimingDamageAfterDamageType,
  CardEffectTimingDamageAfterEventSource,
} from "./CardMetaData";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingDamageAfterEventDetail = {
  type: CardEffectTimingDamageAfterDamageType;
  source: CardEffectTimingDamageAfterEventSource;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export const EventEmpty = (): CardEffectTimingDamageAfterEventDetail => {
  return {
    type: globalCache.metadata!.effectTimingDamageAfterDamageTypes[0],
    source: globalCache.metadata!.effectTimingDamageAfterEventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
