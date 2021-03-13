import { globalCache } from "../components/CauldronApi";

export type NumConditionDetail = {
  value: number;
  compare: NumCompare;
  not: boolean;
};

export type NumCompare = string;

export const numConditionEmpty = (): NumConditionDetail => {
  return {
    value: 0,
    compare: globalCache.metadata!.numConditionCompares[0],
    not: false,
  };
};
