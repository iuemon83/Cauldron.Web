import { numCompares, NumConditionDetail } from "../types/NumConditionDetail";

interface Props {
  detail: NumConditionDetail;
  onChanged: (detail: Partial<NumConditionDetail>) => void;
}

const NumCondition: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <label>値</label>
        <input
          type="number"
          value={detail.value}
          onChange={(e) => onChanged({ value: Number(e.target.value) })}
        ></input>
      </div>
      <div>
        <label>比較方法</label>
        <select
          value={numCompares.indexOf(detail.compare)}
          onChange={(e) =>
            onChanged({ compare: numCompares[Number(e.target.value)] })
          }
        >
          {numCompares.map((elm, index) => (
            <option key={index} value={index}>
              {elm}
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

export default NumCondition;
