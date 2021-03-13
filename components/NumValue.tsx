import { NumValueDetail } from "../types/NumValueDetail";
import { numValueModifierEmpty } from "../types/NumValueModifierDetail";
import InputNumberOption from "./input/InputNumberOption";
import InputOption from "./input/InputOption";
import NumValueModifier from "./NumValueModifier";

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
