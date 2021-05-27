import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingEndTurnEventSource } from "./CardMetaData";

export type CardEffectTimingEndTurnEventDetail = {
  source: CardEffectTimingEndTurnEventSource["code"];
};

export const cardEffectTimingEndTurnEventEmpty =
  (): CardEffectTimingEndTurnEventDetail => {
    return {
      source: globalCache.metadata!.effectTimingEndTurnEventSources[0].code,
    };
  };
