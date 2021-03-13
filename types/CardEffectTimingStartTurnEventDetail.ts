import { globalCache } from "../components/CauldronApi";

export type CardEffectTimingStartTurnEventDetail = {
  source: EventSource;
};

export type EventSource = string;

export const cardEffectTimingStartTurnEventEmpty = (): CardEffectTimingStartTurnEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingStartTurnEventSources[0],
  };
};
