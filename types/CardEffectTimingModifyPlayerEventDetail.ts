import { globalCache } from "../components/CauldronApi";

export type CardEffectTimingModifyPlayerEventDetail = {
  source: EventSource;
  modifyMaxHp: boolean;
  modifyHp: boolean;
  modifyMaxMp: boolean;
  modifyMp: boolean;
};
// export const eventSources = ["all", "damageSource", "guard"] as const;
export type EventSource = string;
// typeof eventSources[number];

export const CardEffectTimingDamageBeforeEventEmpty = (): CardEffectTimingModifyPlayerEventDetail => {
  return {
    source: globalCache.metadata!.effectTimingDamageBeforeEventSources[0],
    modifyMaxHp: false,
    modifyHp: false,
    modifyMaxMp: false,
    modifyMp: false,
  };
};
