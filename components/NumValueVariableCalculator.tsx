import { NumValueVariableCalculatorDetail } from "../types/NumValueVariableCalculatorDetail";
import InputText from "./input/InputText";

interface Props {
  detail: NumValueVariableCalculatorDetail;
  onChanged: (detail: Partial<NumValueVariableCalculatorDetail>) => void;
}

const NumValueVariableCalculator: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputText
        label="変数名"
        keyName="name"
        detail={detail}
        onChanged={onChanged}
      />
    </>
  );
};
export default NumValueVariableCalculator;
