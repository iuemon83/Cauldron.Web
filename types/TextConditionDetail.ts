import { globalCache } from "../components/CauldronApi";
import { TextValueDetail, textValueEmpty } from "./TextValueDetail";

export type TextConditionDetail = {
  value: TextValueDetail;
  compare: TextCompare;
  not: boolean;
};

export type TextCompare = string;

export const textConditionEmpty = (): TextConditionDetail => {
  return {
    value: textValueEmpty(),
    compare: globalCache.metadata!.textConditionCompares[0],
    not: false,
  };
};
