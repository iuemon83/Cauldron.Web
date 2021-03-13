import { globalCache } from "../components/CauldronApi";
import { CardType } from "./CardDetail";

export type CardTypeConditionDetail = {
  value: CardType[];
  not: boolean;
};

export const cardTypeConditionEmpty = (): CardTypeConditionDetail => {
  return {
    value: [globalCache.metadata!.cardTypes[0]],
    not: false,
  };
};
