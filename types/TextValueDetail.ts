import { TextValueCalculatorDetail } from "./TextValueCalculatorDetail";

export type TextValueDetail = {
  pureValue: string | undefined;
  textValueCalculator: TextValueCalculatorDetail | undefined;
};

export const textValueEmpty = (): TextValueDetail => {
  return {
    pureValue: "",
    textValueCalculator: undefined,
  };
};
