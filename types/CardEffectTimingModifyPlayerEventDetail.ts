import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingModifyPlayerEventSource } from "./CardMetaData";

export type CardEffectTimingModifyPlayerEventDetail = {
  source: CardEffectTimingModifyPlayerEventSource;
  modifyMaxHp: boolean;
  modifyHp: boolean;
  modifyMaxMp: boolean;
  modifyMp: boolean;
};

export const CardEffectTimingDamageBeforeEventEmpty =
  (): CardEffectTimingModifyPlayerEventDetail => {
    return {
      source: globalCache.metadata!.effectTimingDamageBeforeEventSources[0],
      modifyMaxHp: false,
      modifyHp: false,
      modifyMaxMp: false,
      modifyMp: false,
    };
  };
