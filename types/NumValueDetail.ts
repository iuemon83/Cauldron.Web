import { NumValueCalculatorDetail } from "./NumValueCalculatorDetail";
import { NumValueModifierDetail } from "./NumValueModifierDetail";

export type NumValueDetail = {
  pureValue: number | undefined;
  numValueCalculator: NumValueCalculatorDetail | undefined;
  numValueModifier: NumValueModifierDetail | undefined;
};

export const numValueEmpty = (): NumValueDetail => {
  return {
    pureValue: 0,
    numValueCalculator: undefined,
    numValueModifier: undefined,
  };
};
