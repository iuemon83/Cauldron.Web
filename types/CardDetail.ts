import { globalCache } from "../components/CauldronApi";
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

export type CardType = string;
export type CardAbility = string;

export const cardEmpty = (): CardDetail => {
  return {
    cost: 0,
    name: "",
    flavorText: "",
    type: globalCache.metadata!.cardTypes[0],
    power: 0,
    toughness: 0,
    isToken: false,
    abilities: [],
    effects: [],
    numAttacksLimitInTurn: undefined,
    numTurnsToCanAttack: undefined,
  };
};
