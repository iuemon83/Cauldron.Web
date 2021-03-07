export type NumConditionDetail = {
  value: number;
  compare: NumCompare;
  not: boolean;
};

export const numCompares = ["=", ">", "<"] as const;
export type NumCompare = typeof numCompares[number];

export const numConditionEmpty = (): NumConditionDetail => {
  return {
    value: 0,
    compare: numCompares[0],
    not: false,
  };
};
