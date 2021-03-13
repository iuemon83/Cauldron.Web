import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type CardEffectActionSetVariableDetail = {
  name: string;
  numValue: NumValueDetail;
};

export const CardEffectActionAddCardEmpty = (): CardEffectActionSetVariableDetail => {
  return {
    name: "",
    numValue: numValueEmpty(),
  };
};
