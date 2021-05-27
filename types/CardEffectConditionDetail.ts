import { globalCache } from "../components/CauldronApi";
import { CardEffectIfDetail } from "./CardEffectIfDetail";
import { CardEffectWhenDetail } from "./CardEffectWhenDetail";
import { CardEffectWhileDetail } from "./CardEffectWhileDetail";
import { ZoneName } from "./CardMetaData";

export type CardEffectConditionDetail = {
  zonePrettyName: ZoneName["code"];
  when: CardEffectWhenDetail | undefined;
  while: CardEffectWhileDetail | undefined;
  if: CardEffectIfDetail | undefined;
};

export const CardEffectConditionEmpty = (): CardEffectConditionDetail => {
  return {
    zonePrettyName: globalCache.metadata!.zoneNames[0].code,
    when: undefined,
    while: undefined,
    if: undefined,
  };
};
