import {
  CardEffectTimingDestroyEventDetail,
  eventSources,
} from "../types/CardEffectTimingDestroyEventDetail";

interface Props {
  detail: CardEffectTimingDestroyEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingDestroyEventDetail>) => void;
}

const CardEffectTimingDestroy: React.FC<Props> = ({ detail, onChanged }) => {
  const handleChangeEventSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);

    onChanged({ source: eventSources[id] });
  };

  return (
    <>
      <div>
        <label>
          source:
          <select
            value={eventSources.indexOf(detail.source)}
            onChange={handleChangeEventSource}
          >
            {eventSources.map((e, index) => (
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

export default CardEffectTimingDestroy;
