import { CardEffectTimingDestroyEventDetail } from "../types/CardEffectTimingDestroyEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingDestroyEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingDestroyEventDetail>) => void;
}

const CardEffectTimingDestroy: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingDestroyEventSources.map((v) => [
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

export default CardEffectTimingDestroy;
