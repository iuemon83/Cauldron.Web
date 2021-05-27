import { CardEffectTimingPlayEventDetail } from "../types/CardEffectTimingPlayEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingPlayEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingPlayEventDetail>) => void;
}

const CardEffectTimingPlay: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingPlayEventSources.map((v) => [
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

export default CardEffectTimingPlay;
