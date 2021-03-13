import { CardEffectTimingStartTurnEventDetail } from "../types/CardEffectTimingStartTurnEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingStartTurnEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingStartTurnEventDetail>) => void;
}

const CardEffectTimingStartTurn: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSources = globalCache.metadata!.effectTimingStartTurnEventSources;

  return (
    <>
      <InputSelect
        label="source"
        values={eventSources}
        value={detail.source}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingStartTurn;
