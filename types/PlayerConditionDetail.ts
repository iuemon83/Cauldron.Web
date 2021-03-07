export type PlayerConditionDetail = {
  context: PlayerConditionContext;
  type: PlayerConditionType;
};

export const playerConditionContexts = ["none", "all"] as const;
export type PlayerConditionContext = typeof playerConditionContexts[number];

export const playerConditionTypes = ["none", "all", "opponent"] as const;
export type PlayerConditionType = typeof playerConditionTypes[number];

export const playerConditionEmpty = (): PlayerConditionDetail => {
  return {
    context: playerConditionContexts[0],
    type: playerConditionTypes[0],
  };
};
