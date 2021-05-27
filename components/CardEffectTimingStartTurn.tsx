import { CardEffectTimingStartTurnEventDetail } from "../types/CardEffectTimingStartTurnEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingStartTurnEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingStartTurnEventDetail>) => void;
}

const CardEffectTimingStartTurn: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingStartTurnEventSources.map((v) => [
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

export default CardEffectTimingStartTurn;
