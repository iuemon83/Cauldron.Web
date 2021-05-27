import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingPlayEventSource } from "./CardMetaData";

export type CardEffectTimingPlayEventDetail = {
  source: CardEffectTimingPlayEventSource["code"];
};

export const cardEffectTimingPlayEventEmpty =
  (): CardEffectTimingPlayEventDetail => {
    return {
      source: globalCache.metadata!.effectTimingPlayEventSources[0].code,
    };
  };
