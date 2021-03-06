import { CardTypeConditionDetail, cardTypes } from "./CauldronTypes";

interface Props {
  detail: CardTypeConditionDetail;
  onChanged: (detail: Partial<CardTypeConditionDetail>) => void;
}

const CardTypeCondition: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <label>値</label>
        <select
          value={cardTypes.indexOf(detail.value[0])}
          onChange={(e) =>
            onChanged({ value: [cardTypes[Number(e.target.value)]] })
          }
        >
          {cardTypes.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>not</label>
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
