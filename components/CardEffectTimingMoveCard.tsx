import { CardEffectTimingMoveCardEventDetail } from "../types/CardEffectTimingMoveCardEventDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingMoveCardEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingMoveCardEventDetail>) => void;
}

const CardEffectTimingMoveCard: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingMoveCardEventSources.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const eventSources = Object.keys(eventSourcesLabelsByValue);

  const zoneNamesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText])
  );
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

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
      <InputSelect
        label="from"
        values={zoneNames}
        detail={detail}
        keyName={"from"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputSelect
        label="to"
        values={zoneNames}
        detail={detail}
        keyName={"to"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingMoveCard;
