import { NumValueCalculatorDetail } from "../types/NumValueCalculatorDetail";
import { globalCache } from "./CauldronApi";
import Choice from "./Choice";
import NumValue from "./NumValue";

interface Props {
  detail: NumValueCalculatorDetail;
  onChanged: (detail: Partial<NumValueCalculatorDetail>) => void;
}

const NumValueCalculator: React.FC<Props> = ({ detail, onChanged }) => {
  const valueTypes = globalCache.metadata!.numValueCalculatorValueTypes;

  const valueSelect = (
    label: string,
    values: any[],
    value: any,
    onChange: (e: any) => void
  ) => {
    return (
      <label>
        {label}:
        <select value={value} onChange={onChange}>
          {values.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return (
    <>
      {valueSelect(
        "演算子",
        valueTypes,
        valueTypes.indexOf(detail.type),
        (e) => {
          onChanged({ type: valueTypes[Number(e.target.value)] });
        }
      )}
      <Choice
        detail={detail.cardsChoice}
        onChanged={(x) =>
          onChanged({ cardsChoice: { ...detail.cardsChoice, ...x } })
        }
      ></Choice>
    </>
  );
};
export default NumValueCalculator;
