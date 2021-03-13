import { NumConditionDetail } from "../types/NumConditionDetail";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: NumConditionDetail;
  onChanged: (detail: Partial<NumConditionDetail>) => void;
}

const NumCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const numCompares = globalCache.metadata!.numConditionCompares;

  return (
    <>
      <InputNumber
        label="値"
        keyName="value"
        detail={detail}
        onChanged={onChanged}
      />
      <InputSelect
        label="比較方法"
        values={numCompares}
        value={detail.compare}
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

export default NumCondition;
