import { ChoiceDetail } from "./ChoiceDetail";

export type ZoneValueDetail = {
  pureValue: ZoneName[];
  choice: ChoiceDetail | undefined;
};

export type ZoneName = string;

export const zoneValueEmpty = (): ZoneValueDetail => {
  return {
    pureValue: [],
    choice: undefined,
  };
};
