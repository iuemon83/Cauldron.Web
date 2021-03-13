import { globalCache } from "../components/CauldronApi";

export type CardEffectTimingEndTurnEventDetail = {
  source: EventSource;
};

export type EventSource = string;

export const cardEffectTimingEndTurnEventEmpty = (): CardEffectTimingEndTurnEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingEndTurnEventSources[0],
  };
};
