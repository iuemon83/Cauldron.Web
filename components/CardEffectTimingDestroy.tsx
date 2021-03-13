import { CardEffectTimingDestroyEventDetail } from "../types/CardEffectTimingDestroyEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingDestroyEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingDestroyEventDetail>) => void;
}

const CardEffectTimingDestroy: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSources = globalCache.metadata!.effectTimingDestroyEventSources;

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

export default CardEffectTimingDestroy;
