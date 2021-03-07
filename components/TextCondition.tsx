import {
  textCompares,
  TextConditionDetail,
} from "../types/TextConditionDetail";
import TextValue from "./TextValue";

interface Props {
  detail: TextConditionDetail;
  onChanged: (detail: Partial<TextConditionDetail>) => void;
}

const TextCondition: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <TextValue
        detail={detail.value}
        onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}
      ></TextValue>
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
