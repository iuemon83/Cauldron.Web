import {
  CardEffectTimingStartTurnEventDetail,
  cardEffectTimingStartTurnEventSources,
} from "../types/CardEffectTimingStartTurnEventDetail";

interface Props {
  detail: CardEffectTimingStartTurnEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingStartTurnEventDetail>) => void;
}

const CardEffectTimingStartTurn: React.FC<Props> = ({ detail, onChanged }) => {
  const handleChangeEventSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);

    onChanged({ source: cardEffectTimingStartTurnEventSources[id] });
  };

  return (
    <>
      <div>
        <label>
          source:
          <select
            value={cardEffectTimingStartTurnEventSources.indexOf(detail.source)}
            onChange={handleChangeEventSource}
          >
            {cardEffectTimingStartTurnEventSources.map((e, index) => (
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

export default CardEffectTimingStartTurn;
