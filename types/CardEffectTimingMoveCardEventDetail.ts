import { ZoneName, zoneNames } from "./ZoneValueDetail";

export type CardEffectTimingMoveCardEventDetail = {
  source: EventSource;
  from: ZoneName;
  to: ZoneName;
};
export const eventSources = ["this", "other"] as const;
export type EventSource = typeof eventSources[number];

export const CardEffectTimingMoveCardEventEmpty = (): CardEffectTimingMoveCardEventDetail => {
  return {
    source: eventSources[0],
    from: zoneNames[0],
    to: zoneNames[0],
  };
};
