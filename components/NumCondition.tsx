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
      <div>
        <InputNumber
          label="値"
          keyName="value"
          detail={detail}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputSelect
          label="比較方法"
          values={numCompares}
          detail={detail}
          keyName={"compare"}
          onChanged={onChanged}
        />
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

export default NumCondition;
