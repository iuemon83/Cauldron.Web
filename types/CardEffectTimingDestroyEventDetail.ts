export type CardEffectTimingDestroyEventDetail = {
  source: EventSource;
};
export const eventSources = ["this", "other"] as const;
export type EventSource = typeof eventSources[number];

export const CardEffectTimingDestroyEventEmpty = (): CardEffectTimingDestroyEventDetail => {
  return {
    source: eventSources[0],
  };
};
