import { CardEffectTimingEndTurnEventDetail } from "../types/CardEffectTimingEndTurnEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingEndTurnEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingEndTurnEventDetail>) => void;
}

const CardEffectTimingEndTurn: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingEndTurnEventSources.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const eventSources = Object.keys(eventSourcesLabelsByValue);

  return (
    <>
      <InputSelect
        label="source"
        values={eventSources}
        detail={detail}
        keyName={"source"}
        getLabel={(v) => eventSourcesLabelsByValue[v]}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingEndTurn;
