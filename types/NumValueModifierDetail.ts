import { globalCache } from "../components/CauldronApi";
import { Operator } from "./CardMetaData";
import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type NumValueModifierDetail = {
  operator: Operator["code"];
  value: NumValueDetail;
};

export const numValueModifierEmpty = (): NumValueModifierDetail => {
  return {
    operator: globalCache.metadata!.numValueModifierOperators[0].code,
    value: numValueEmpty(),
  };
};
