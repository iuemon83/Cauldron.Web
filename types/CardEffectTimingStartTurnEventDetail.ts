import { globalCache } from "../components/CauldronApi";

export type CardEffectTimingStartTurnEventDetail = {
  source: EventSource;
};

export type EventSource = string;

export const CardEffectTimingStartTurnEventEmpty = (): CardEffectTimingStartTurnEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingStartTurnEventSources[0],
  };
};
