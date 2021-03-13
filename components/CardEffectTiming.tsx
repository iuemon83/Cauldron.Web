import { cardEffectTimingDamageBeforeEventEmpty } from "../types/CardEffectTimingDamageBeforeEventDetail";
import { cardEffectTimingDestroyEventEmpty } from "../types/CardEffectTimingDestroyEventDetail";
import { CardEffectTimingDetail } from "../types/CardEffectTimingDetail";
import { cardEffectTimingEndTurnEventEmpty } from "../types/CardEffectTimingEndTurnEventDetail";
import { cardEffectTimingMoveCardEventEmpty } from "../types/CardEffectTimingMoveCardEventDetail";
import { cardEffectTimingPlayEventEmpty } from "../types/CardEffectTimingPlayEventDetail";
import { cardEffectTimingStartTurnEventEmpty } from "../types/CardEffectTimingStartTurnEventDetail";
import CardEffectTimingDamageBefore from "./CardEffectTimingDamageBefore";
import CardEffectTimingDestroy from "./CardEffectTimingDestroy";
import CardEffectTimingEndTurn from "./CardEffectTimingEndTurn";
import CardEffectTimingMoveCard from "./CardEffectTimingMoveCard";
import CardEffectTimingPlay from "./CardEffectTimingPlay";
import CardEffectTimingStartTurn from "./CardEffectTimingStartTurn";
import InputOption from "./input/InputOption";

interface Props {
  detail: CardEffectTimingDetail;
  onChanged: (detail: Partial<CardEffectTimingDetail>) => void;
}

const CardEffectTiming: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputOption
        label="ターン開始時"
        detail={detail}
        keyName="startTurn"
        empty={cardEffectTimingStartTurnEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectTimingStartTurn
            detail={d!}
            onChanged={h}
          ></CardEffectTimingStartTurn>
        )}
      />
      <InputOption
        label="ターン終了時"
        detail={detail}
        keyName="endTurn"
        empty={cardEffectTimingEndTurnEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectTimingEndTurn
            detail={d!}
            onChanged={h}
          ></CardEffectTimingEndTurn>
        )}
      />
      <InputOption
        label="カードのプレイ時"
        detail={detail}
        keyName="play"
        empty={cardEffectTimingPlayEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectTimingPlay
            detail={d!}
            onChanged={h}
          ></CardEffectTimingPlay>
        )}
      />
      <InputOption
        label="カードの移動時"
        detail={detail}
        keyName="moveCard"
        empty={cardEffectTimingMoveCardEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectTimingMoveCard
            detail={d!}
            onChanged={h}
          ></CardEffectTimingMoveCard>
        )}
      />
      <InputOption
        label="カードの破壊時"
        detail={detail}
        keyName="destroy"
        empty={cardEffectTimingDestroyEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectTimingDestroy
            detail={d!}
            onChanged={h}
          ></CardEffectTimingDestroy>
        )}
      />
      <InputOption
        label="ダメージ前"
        detail={detail}
        keyName="damageBefore"
        empty={cardEffectTimingDamageBeforeEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectTimingDamageBefore
            detail={d!}
            onChanged={h}
          ></CardEffectTimingDamageBefore>
        )}
      />
    </>
  );
};

export default CardEffectTiming;
