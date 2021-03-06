import { textCompares, TextConditionDetail } from "./CauldronTypes";

interface Props {
  detail: TextConditionDetail;
  onChanged: (detail: Partial<TextConditionDetail>) => void;
}

const TextCondition: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <label>値</label>
        <input
          type="number"
          value={detail.value}
          onChange={(e) => onChanged({ value: e.target.value })}
        ></input>
      </div>
      <div>
        <label>比較方法</label>
        <select
          value={textCompares.indexOf(detail.compare)}
          onChange={(e) =>
            onChanged({ compare: textCompares[Number(e.target.value)] })
          }
        >
          {textCompares.map((elm, index) => (
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

export default TextCondition;
