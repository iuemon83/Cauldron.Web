import { globalCache } from "../components/CauldronApi";
import { CardType } from "./CardMetaData";

export type CardTypeConditionDetail = {
  value: CardType["code"][];
  not: boolean;
};

export const cardTypeConditionEmpty = (): CardTypeConditionDetail => {
  return {
    value: [globalCache.metadata!.cardTypes[0].code],
    not: false,
  };
};
