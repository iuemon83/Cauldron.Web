import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import {
  CardEffectTimingDamageBeforeDamageType,
  CardEffectTimingDamageBeforeEventSource,
} from "./CardMetaData";
import { PlayerConditionDetail } from "./PlayerConditionDetail";

export type CardEffectTimingDamageBeforeEventDetail = {
  type: CardEffectTimingDamageBeforeDamageType["code"];
  source: CardEffectTimingDamageBeforeEventSource["code"];
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export const cardEffectTimingDamageBeforeEventEmpty =
  (): CardEffectTimingDamageBeforeEventDetail => {
    return {
      type: globalCache.metadata!.effectTimingDamageBeforeDamageTypes[0].code,
      source:
        globalCache.metadata!.effectTimingDamageBeforeEventSources[0].code,
      playerCondition: undefined,
      cardCondition: undefined,
    };
  };
