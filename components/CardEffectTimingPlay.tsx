import { CardEffectTimingPlayEventDetail } from "../types/CardEffectTimingPlayEventDetail";
import { globalCache } from "./CauldronApi";

interface Props {
  detail: CardEffectTimingPlayEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingPlayEventDetail>) => void;
}

const CardEffectTimingPlay: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSources = globalCache.metadata!.effectTimingPlayEventSources;

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

export default CardEffectTimingPlay;
