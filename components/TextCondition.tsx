import { TextConditionDetail } from "../types/TextConditionDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import TextValue from "./TextValue";

interface Props {
  detail: TextConditionDetail;
  onChanged: (detail: Partial<TextConditionDetail>) => void;
}

const TextCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const textCompares = globalCache.metadata!.textConditionCompares;

  return (
    <>
      <TextValue
        detail={detail.value}
        onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}
      ></TextValue>
      <InputSelect
        label="比較方法"
        values={textCompares}
        detail={detail}
        keyName={"compare"}
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

export default TextCondition;
