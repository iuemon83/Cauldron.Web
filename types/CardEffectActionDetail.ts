import { CardEffectActionDamageDetail } from "./CardEffectActionDamageDetail";

export type CardEffectActionDetail = {
  damage: CardEffectActionDamageDetail | undefined;
};

export const cardEffectActionEmpty = (): CardEffectActionDetail => {
  return { damage: undefined };
};
