import { CardEffectTimingEndTurnEventDetail } from "../types/CardEffectTimingEndTurnEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingEndTurnEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingEndTurnEventDetail>) => void;
}

const CardEffectTimingEndTurn: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSources = globalCache.metadata!.effectTimingEndTurnEventSources;

  return (
    <>
      <InputSelect
        label="source"
        values={eventSources}
        detail={detail}
        keyName={"source"}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingEndTurn;
