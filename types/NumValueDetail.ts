import { NumValueCalculatorDetail } from "./NumValueCalculatorDetail";
import { NumValueModifierDetail } from "./NumValueModifierDetail";
import { NumValueVariableCalculatorDetail } from "./NumValueVariableCalculatorDetail";

export type NumValueDetail = {
  pureValue: number | undefined;
  numValueCalculator: NumValueCalculatorDetail | undefined;
  numValueVariableCalculator: NumValueVariableCalculatorDetail | undefined;
  numValueModifier: NumValueModifierDetail | undefined;
};

export const numValueEmpty = (): NumValueDetail => {
  return {
    pureValue: 0,
    numValueCalculator: undefined,
    numValueVariableCalculator: undefined,
    numValueModifier: undefined,
  };
};
