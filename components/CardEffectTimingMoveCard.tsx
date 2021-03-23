import { CardEffectTimingMoveCardEventDetail } from "../types/CardEffectTimingMoveCardEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingMoveCardEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingMoveCardEventDetail>) => void;
}

const CardEffectTimingMoveCard: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSources = globalCache.metadata!.effectTimingMoveCardEventSources;

  const zoneNames = globalCache.metadata!.zoneNames;

  return (
    <>
      <InputSelect
        label="source"
        values={eventSources}
        detail={detail}
        keyName={"source"}
        onChanged={onChanged}
      />
      <InputSelect
        label="from"
        values={zoneNames}
        detail={detail}
        keyName={"from"}
        onChanged={onChanged}
      />
      <InputSelect
        label="to"
        values={zoneNames}
        detail={detail}
        keyName={"to"}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingMoveCard;
