import {
  CardEffectTimingDetail,
  CardEffectTimingEmpty,
} from "./CardEffectTimingDetail";

export type CardEffectWhenDetail = {
  timing: CardEffectTimingDetail;
};
export const CardEffectWhenEmpty = (): CardEffectWhenDetail => {
  return {
    timing: CardEffectTimingEmpty(),
  };
};
