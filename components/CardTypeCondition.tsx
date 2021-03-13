import { CardTypeConditionDetail } from "../types/CardTypeConditionDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardTypeConditionDetail;
  onChanged: (detail: Partial<CardTypeConditionDetail>) => void;
}

const CardTypeCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const cardTypes = globalCache.metadata!.cardTypes;

  return (
    <>
      <InputSelect
        label="値"
        values={cardTypes}
        value={detail.value[0]}
        onChanged={onChanged}
      />
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
