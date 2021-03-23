import { CardTypeConditionDetail } from "../types/CardTypeConditionDetail";
import { globalCache } from "./CauldronApi";

interface Props {
  detail: CardTypeConditionDetail;
  onChanged: (detail: Partial<CardTypeConditionDetail>) => void;
}

const CardTypeCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const cardTypes = globalCache.metadata!.cardTypes;

  const handleAbilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
      const newlist = [...detail.value, cardTypes[index]];

      onChanged({ value: newlist });
    } else {
      const newlist = detail.value.filter((x) => x !== cardTypes[index]);

      onChanged({ value: newlist });
    }
  };

  return (
    <>
      <div>
        アビリティ:
        {cardTypes.map((e, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={index}
              checked={detail.value.indexOf(e) !== -1}
              onChange={handleAbilityChange}
            />
            {e}
          </label>
        ))}
      </div>
      <div>
        <label>not?:</label>
        <input
          type="checkbox"
          checked={detail.not}
          onChange={(e) => onChanged({ not: e.target.checked })}
        ></input>
      </div>
    </>
  );
};

export default CardTypeCondition;
