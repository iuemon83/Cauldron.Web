import { cardConditionEmpty } from "../types/CardConditionDetail";
import { CardEffectTimingDamageBeforeEventDetail } from "../types/CardEffectTimingDamageBeforeEventDetail";
import { playerConditionEmpty } from "../types/PlayerConditionDetail";
import CardCondition from "./CardCondition";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";
import PlayerCondition from "./PlayerCondition";

interface Props {
  detail: CardEffectTimingDamageBeforeEventDetail;
  onChanged: (
    newValue: Partial<CardEffectTimingDamageBeforeEventDetail>
  ) => void;
}

const CardEffectTimingDamageBefore: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  const eventSources = globalCache.metadata!
    .effectTimingDamageBeforeEventSources;

  return (
    <>
      <InputSelect
        label="source"
        values={eventSources}
        value={detail.source}
        onChanged={onChanged}
      />
      <InputOption
        label="プレイヤーの選択条件"
        detail={detail}
        keyName="playerCondition"
        empty={playerConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <PlayerCondition detail={d!} onChanged={h}></PlayerCondition>
        )}
      />
      <InputOption
        label="カードの選択条件"
        detail={detail}
        keyName="cardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardCondition detail={d!} onChanged={h}></CardCondition>
        )}
      />
    </>
  );
};

export default CardEffectTimingDamageBefore;