import { TextValueDetail, textValueEmpty } from "./TextValueDetail";

export type TextConditionDetail = {
  value: TextValueDetail;
  compare: TextCompare;
  not: boolean;
};

export const textCompares = ["=", "like"] as const;
export type TextCompare = typeof textCompares[number];

export const textConditionEmpty = (): TextConditionDetail => {
  return {
    value: textValueEmpty(),
    compare: textCompares[0],
    not: false,
  };
};
