import { globalCache } from "../components/CauldronApi";
import { CardSetConditionType } from "./CardMetaData";
import { TextConditionDetail, textConditionEmpty } from "./TextConditionDetail";

export type CardSetConditionDetail = {
  type: CardSetConditionType["code"];
  valueCondition: TextConditionDetail;
};

export const cardSetConditionEmpty = (): CardSetConditionDetail => {
  return {
    type: globalCache.metadata!.cardSetConditionTypes[0].code,
    valueCondition: textConditionEmpty(),
  };
};
