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
        value={detail.source}
        onChanged={onChanged}
      />
      <InputSelect
        label="from"
        values={zoneNames}
        value={detail.from}
        onChanged={onChanged}
      />
      <InputSelect
        label="to"
        values={zoneNames}
        value={detail.to}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingMoveCard;
