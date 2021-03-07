export type CardEffectTimingPlayEventDetail = {
  source: CardEffectTimingPlayEventSource;
};
export const cardEffectTimingPlayEventSources = ["this", "other"] as const;
export type CardEffectTimingPlayEventSource = typeof cardEffectTimingPlayEventSources[number];

export const CardEffectTimingPlayEventEmpty = (): CardEffectTimingPlayEventDetail => {
  return {
    source: cardEffectTimingPlayEventSources[0],
  };
};
