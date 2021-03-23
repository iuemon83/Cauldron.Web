import {
  CardEffectTimingDetail,
  cardEffectTimingEmpty,
} from "./CardEffectTimingDetail";

export type CardEffectWhileDetail = {
  timing: CardEffectTimingDetail;
  skip: number;
  take: number;
};

export const CardEffectWhileEmpty = (): CardEffectWhileDetail => {
  return {
    timing: cardEffectTimingEmpty(),
    skip: 0,
    take: 0,
  };
};
