import { NumValueModifierDetail } from "../types/NumValueModifierDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import NumValue from "./NumValue";

interface Props {
  detail: NumValueModifierDetail;
  onChanged: (detail: Partial<NumValueModifierDetail>) => void;
}

const NumValueModifier: React.FC<Props> = ({ detail, onChanged }) => {
  const operatorsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueModifierOperators.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const operators = Object.keys(operatorsLabelsByValue);

  return (
    <>
      <InputSelect
        label="演算子"
        values={operators}
        detail={detail}
        keyName={"operator"}
        getLabel={(v) => operatorsLabelsByValue[v]}
        onChanged={onChanged}
      />
      <NumValue
        detail={detail.value}
        onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}
      ></NumValue>
    </>
  );
};
export default NumValueModifier;
