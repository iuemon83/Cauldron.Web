import { CardEffectIfDetail } from "./CardEffectIfDetail";
import { CardEffectWhenDetail } from "./CardEffectWhenDetail";
import { CardEffectWhileDetail } from "./CardEffectWhileDetail";
import { ZoneName } from "./ZoneValueDetail";

export type CardEffectConditionDetail = {
  zonePrettyName: ZoneName;
  when: CardEffectWhenDetail | undefined;
  while: CardEffectWhileDetail | undefined;
  if: CardEffectIfDetail | undefined;
};
