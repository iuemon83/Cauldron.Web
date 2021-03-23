import { numValueCalculatorEmpty } from "../types/NumValueCalculatorDetail";
import { numValueVariableCalculatorEmpty } from "../types/NumValueVariableCalculatorDetail";
import { numValueModifierEmpty } from "../types/NumValueModifierDetail";
import { NumValueDetail } from "../types/NumValueDetail";
import InputNumberOption from "./input/InputNumberOption";
import InputOption from "./input/InputOption";
import NumValueCalculator from "./NumValueCalculator";
import NumValueModifier from "./NumValueModifier";
import NumValueVariableCalculator from "./NumValueVariableCalculator";

interface Props {
  detail: NumValueDetail;
  onChanged: (detail: Partial<NumValueDetail>) => void;
}

const NumValue: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputNumberOption
        label="定数"
        keyName="pureValue"
        detail={detail}
        onChanged={onChanged}
      />
      <InputOption
        label="算出"
        detail={detail}
        keyName="numValueCalculator"
        empty={numValueCalculatorEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <NumValueCalculator detail={d!} onChanged={h}></NumValueCalculator>
        )}
      />
      <InputOption
        label="変数"
        detail={detail}
        keyName="numValueVariableCalculator"
        empty={numValueVariableCalculatorEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <NumValueVariableCalculator
            detail={d!}
            onChanged={h}
          ></NumValueVariableCalculator>
        )}
      />
      <InputOption
        label="演算"
        detail={detail}
        keyName="numValueModifier"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <NumValueModifier detail={d!} onChanged={h}></NumValueModifier>
        )}
      />
    </>
  );
};

export default NumValue;
