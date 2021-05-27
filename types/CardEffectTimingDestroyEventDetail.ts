import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingDestroyEventSource } from "./CardMetaData";

export type CardEffectTimingDestroyEventDetail = {
  source: CardEffectTimingDestroyEventSource["code"];
};

export const cardEffectTimingDestroyEventEmpty =
  (): CardEffectTimingDestroyEventDetail => {
    return {
      source: globalCache.metadata!.effectTimingDestroyEventSources[0].code,
    };
  };
