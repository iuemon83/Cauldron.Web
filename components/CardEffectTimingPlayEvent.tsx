import {
  CardEffectTimingPlayEventDetail,
  cardEffectTimingPlayEventSources,
} from "../types/CardEffectTimingPlayEventDetail";

interface Props {
  detail: CardEffectTimingPlayEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingPlayEventDetail>) => void;
}

const CardEffectTimingPlayEvent: React.FC<Props> = ({ detail, onChanged }) => {
  const handleChangeEventSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);

    onChanged({ source: cardEffectTimingPlayEventSources[id] });
  };

  return (
    <>
      <div>
        <label>
          source:
          <select
            value={cardEffectTimingPlayEventSources.indexOf(detail.source)}
            onChange={handleChangeEventSource}
          >
            {cardEffectTimingPlayEventSources.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default CardEffectTimingPlayEvent;
