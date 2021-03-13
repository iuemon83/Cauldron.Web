import { NumValueModifierDetail } from "../types/NumValueModifierDetail";
import { globalCache } from "./CauldronApi";
import NumValue from "./NumValue";

interface Props {
  detail: NumValueModifierDetail;
  onChanged: (detail: Partial<NumValueModifierDetail>) => void;
}

const NumValueModifier: React.FC<Props> = ({ detail, onChanged }) => {
  const operators = globalCache.metadata!.numValueModifierOperators;

  return (
    <>
      <label>
        演算子:
        <select
          value={operators.indexOf(detail.operator)}
          onChange={(e) => {
            onChanged({ operator: operators[Number(e.target.value)] });
          }}
        >
          {operators.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </label>
      <NumValue
        detail={detail.value}
        onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}
      ></NumValue>
    </>
  );
};
export default NumValueModifier;
