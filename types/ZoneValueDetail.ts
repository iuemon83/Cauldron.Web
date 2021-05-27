import { ChoiceDetail } from "./ChoiceDetail";

export type ZoneValueDetail = {
  pureValue: string[];
  choice: ChoiceDetail | undefined;
};

export const zoneValueEmpty = (): ZoneValueDetail => {
  return {
    pureValue: [],
    choice: undefined,
  };
};
