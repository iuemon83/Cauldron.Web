import { CardType, cardTypes } from "./CardDetail";

export type CardTypeConditionDetail = {
  value: CardType[];
  not: boolean;
};

export const cardTypeConditionEmpty = (): CardTypeConditionDetail => {
  return {
    value: [cardTypes[0]],
    not: false,
  };
};
