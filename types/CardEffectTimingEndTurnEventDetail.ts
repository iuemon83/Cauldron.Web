import { globalCache } from "../components/CauldronApi";

export type CardEffectTimingEndTurnEventDetail = {
  source: EventSource;
};

export type EventSource = string;

export const CardEffectTimingEndTurnEventEmpty = (): CardEffectTimingEndTurnEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingEndTurnEventSources[0],
  };
};
