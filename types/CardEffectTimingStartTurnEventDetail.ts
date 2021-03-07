export type CardEffectTimingStartTurnEventDetail = {
  source: CardEffectTimingStartTurnEventSource;
};
export const cardEffectTimingStartTurnEventSources = [
  "you",
  "opponent",
  "both",
] as const;
export type CardEffectTimingStartTurnEventSource = typeof cardEffectTimingStartTurnEventSources[number];

export const CardEffectTimingStartTurnEventEmpty = (): CardEffectTimingStartTurnEventDetail => {
  return {
    source: cardEffectTimingStartTurnEventSources[0],
  };
};
