import { globalCache } from "../components/CauldronApi";

export type CardEffectTimingPlayEventDetail = {
  source: EventSource;
};

export type EventSource = string;

export const cardEffectTimingPlayEventEmpty = (): CardEffectTimingPlayEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingPlayEventSources[0],
  };
};
