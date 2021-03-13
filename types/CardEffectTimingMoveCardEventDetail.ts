import { globalCache } from "../components/CauldronApi";
import { ZoneName } from "./ZoneValueDetail";

export type CardEffectTimingMoveCardEventDetail = {
  source: EventSource;
  from: ZoneName;
  to: ZoneName;
};

export type EventSource = string;

export const CardEffectTimingMoveCardEventEmpty = (): CardEffectTimingMoveCardEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingMoveCardEventSources[0],
    from: globalCache.metadata!.zoneNames[0],
    to: globalCache.metadata!.zoneNames[0],
  };
};
