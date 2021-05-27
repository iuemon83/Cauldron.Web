import { globalCache } from "../components/CauldronApi";
import { TextCompare } from "./CardMetaData";
import { TextValueDetail, textValueEmpty } from "./TextValueDetail";

export type TextConditionDetail = {
  value: TextValueDetail;
  compare: TextCompare["code"];
  not: boolean;
};

export const textConditionEmpty = (): TextConditionDetail => {
  return {
    value: textValueEmpty(),
    compare: globalCache.metadata!.textConditionCompares[0].code,
    not: false,
  };
};
