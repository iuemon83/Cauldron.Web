import { CardEffectActionMoveCardDetail } from "../types/CardEffectActionMoveCardDetail";
import { globalCache } from "./CauldronApi";
import Choice from "./Choice";

interface Props {
  detail: CardEffectActionMoveCardDetail;
  onChanged: (newValue: Partial<CardEffectActionMoveCardDetail>) => void;
}

const CardEffectActionMoveCard: React.FC<Props> = ({ detail, onChanged }) => {
  const zoneNames = globalCache.metadata!.zoneNames;

  const handleChangeEventSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);

    onChanged({ to: zoneNames[id] });
  };

  return (
    <>
      <label>
        移動先:
        <select
          value={zoneNames.indexOf(detail.to)}
          onChange={handleChangeEventSource}
        >
          {zoneNames.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </label>
      <Choice
        detail={detail.cardsChoice}
        onChanged={(x) =>
          onChanged({
            cardsChoice: { ...detail.cardsChoice, ...x },
          })
        }
      ></Choice>
    </>
  );
};

export default CardEffectActionMoveCard;
