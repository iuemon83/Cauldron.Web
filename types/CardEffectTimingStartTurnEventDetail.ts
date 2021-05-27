import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingStartTurnEventSource } from "./CardMetaData";

export type CardEffectTimingStartTurnEventDetail = {
  source: CardEffectTimingStartTurnEventSource["code"];
};

export const cardEffectTimingStartTurnEventEmpty =
  (): CardEffectTimingStartTurnEventDetail => {
    return {
      source: globalCache.metadata!.effectTimingStartTurnEventSources[0].code,
    };
  };
