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
  const valueTypes = globalCache.metadata!.numValueCalculatorValueTypes;

  return (
    <>
      <InputSelect
        label="演算子"
        values={valueTypes}
        detail={detail}
        keyName={"type"}
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
