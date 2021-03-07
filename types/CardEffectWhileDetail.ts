import {
  CardEffectTimingDetail,
  CardEffectTimingEmpty,
} from "./CardEffectTimingDetail";

export type CardEffectWhileDetail = {
  timing: CardEffectTimingDetail;
  skip: number;
  take: number;
};

export const CardEffectWhileEmpty = (): CardEffectWhileDetail => {
  return {
    skip: 0,
    take: 0,
    timing: CardEffectTimingEmpty(),
  };
};
