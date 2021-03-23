import { CardEffectTimingPlayEventDetail } from "../types/CardEffectTimingPlayEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingPlayEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingPlayEventDetail>) => void;
}

const CardEffectTimingPlay: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSources = globalCache.metadata!.effectTimingPlayEventSources;

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

export default CardEffectTimingPlay;
