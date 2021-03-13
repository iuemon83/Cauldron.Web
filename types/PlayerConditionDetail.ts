import { globalCache } from "../components/CauldronApi";

export type PlayerConditionDetail = {
  context: PlayerConditionContext;
  type: PlayerConditionType;
};

export type PlayerConditionContext = string;
export type PlayerConditionType = string;

export const playerConditionEmpty = (): PlayerConditionDetail => {
  return {
    context: globalCache.metadata!.playerConditionContexts[0],
    type: globalCache.metadata!.playerConditionTypes[0],
  };
};
