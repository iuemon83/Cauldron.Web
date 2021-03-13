import { CardEffectActionAddCardDetail } from "./CardEffectActionAddCardDetail";
import { CardEffectActionAddEffectDetail } from "./CardEffectActionAddEffectDetail";
import { CardEffectActionDamageDetail } from "./CardEffectActionDamageDetail";
import { CardEffectActionDestroyCardDetail } from "./CardEffectActionDestroyCardDetail";
import { CardEffectActionDrawCardDetail } from "./CardEffectActionDrawCardDetail";
import { CardEffectActionModifyCardDetail } from "./CardEffectActionModifyCardDetail";
import { CardEffectActionModifyDamageDetail } from "./CardEffectActionModifyDamageDetail";
import { CardEffectActionModifyPlayerDetail } from "./CardEffectActionModifyPlayerDetail";
import { CardEffectActionMoveCardDetail } from "./CardEffectActionMoveCardDetail";

export type CardEffectActionDetail = {
  damage: CardEffectActionDamageDetail | undefined;
  addCard: CardEffectActionAddCardDetail | undefined;
  modifyCard: CardEffectActionModifyCardDetail | undefined;
  destroyCard: CardEffectActionDestroyCardDetail | undefined;
  modifyDamage: CardEffectActionModifyDamageDetail | undefined;
  modifyPlayer: CardEffectActionModifyPlayerDetail | undefined;
  drawCard: CardEffectActionDrawCardDetail | undefined;
  moveCard: CardEffectActionMoveCardDetail | undefined;
  addEffect: CardEffectActionAddEffectDetail | undefined;
};

export const cardEffectActionEmpty = (): CardEffectActionDetail => {
  return {
    damage: undefined,
    addCard: undefined,
    modifyCard: undefined,
    destroyCard: undefined,
    modifyDamage: undefined,
    modifyPlayer: undefined,
    drawCard: undefined,
    moveCard: undefined,
    addEffect: undefined,
  };
};
