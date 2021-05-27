import { NumValueCalculatorDetail } from "../types/NumValueCalculatorDetail";
import { globalCache } from "./CauldronApi";
import Choice from "./Choice";
import InputSelect from "./input/InputSelect";
import NumValue from "./NumValue";

interface Props {
  detail: NumValueCalculatorDetail;
  onChanged: (detail: Partial<NumValueCalculatorDetail>) => void;
}

const NumValueCalculator: React.FC<Props> = ({ detail, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueCalculatorValueTypes.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  return (
    <>
      <InputSelect
        label="演算子"
        values={valueTypes}
        detail={detail}
        keyName={"type"}
        getLabel={(v) => valueTypesLabelsByValue[v]}
        onChanged={onChanged}
      />
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
