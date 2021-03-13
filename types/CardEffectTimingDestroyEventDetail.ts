import { globalCache } from "../components/CauldronApi";

export type CardEffectTimingDestroyEventDetail = {
  source: EventSource;
};

export type EventSource = string;

export const cardEffectTimingDestroyEventEmpty = (): CardEffectTimingDestroyEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingDestroyEventSources[0],
  };
};