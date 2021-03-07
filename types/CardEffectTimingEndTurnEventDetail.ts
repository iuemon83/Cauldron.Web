export type CardEffectTimingEndTurnEventDetail = {
  source: EventSource;
};
export const eventSources = ["you", "opponent", "both"] as const;
export type EventSource = typeof eventSources[number];

export const CardEffectTimingEndTurnEventEmpty = (): CardEffectTimingEndTurnEventDetail => {
  return {
    source: eventSources[0],
  };
};
