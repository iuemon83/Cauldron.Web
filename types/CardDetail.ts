import { CardEffectDetail } from "./CardEffectDetail";

export type CardDetail = {
  cost: number;
  name: string;
  flavorText: string;
  type: CardType;
  power: number;
  toughness: number;
  isToken: boolean;
  abilities: CardAbility[];
  effects: CardEffectDetail[];
  numTurnsToCanAttack: number | undefined;
  numAttacksLimitInTurn: number | undefined;
};

export const cardTypes = ["creature", "artifact", "sorcery"] as const;
export type CardType = typeof cardTypes[number];

export const cardAbilities = ["cover", "stealth"] as const;
export type CardAbility = typeof cardAbilities[number];

export const cardEmpty = (): CardDetail => {
  return {
    cost: 0,
    name: "",
    flavorText: "",
    type: cardTypes[0],
    power: 0,
    toughness: 0,
    isToken: false,
    abilities: [],
    effects: [],
    numAttacksLimitInTurn: undefined,
    numTurnsToCanAttack: undefined,
  };
};
