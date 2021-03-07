import { NumValueModifierDetail } from "./NumValueModifierDetail";

export type PlayerModifierDetail = {
  maxHp: NumValueModifierDetail | undefined;
  hp: NumValueModifierDetail | undefined;
  maxMp: NumValueModifierDetail | undefined;
  mp: NumValueModifierDetail | undefined;
};

export const playerModifierEmpty = (): PlayerModifierDetail => {
  return {
    maxHp: undefined,
    hp: undefined,
    maxMp: undefined,
    mp: undefined,
  };
};
