import { ZoneValueDetail } from "./ZoneValueDetail";

export type ZoneConditionDetail = {
  value: ZoneValueDetail;
  not: boolean;
};

export const zoneConditionEmpty = (): ZoneConditionDetail => {
  return {
    value: {
      choice: undefined,
      pureValue: [],
    },
    not: false,
  };
};
