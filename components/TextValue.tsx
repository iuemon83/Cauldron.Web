import { choiceEmpty } from "../types/ChoiceDetail";
import {
  textValueCalculatorEmpty,
  valueTypes,
} from "../types/TextValueCalculatorDetail";
import { TextValueDetail } from "../types/TextValueDetail";
import Choice from "./Choice";

interface Props {
  detail: TextValueDetail;
  onChanged: (detail: Partial<TextValueDetail>) => void;
}

const TextValue: React.FC<Props> = ({ detail, onChanged }) => {
  const pureValueInput = () => {
    return (
      <>
        <label>
          値:
          <input
            type="text"
            value={detail.pureValue}
            onChange={(e) => onChanged({ pureValue: e.target.value })}
          />
        </label>
      </>
    );
  };

  const dynamicValueInput = () => {
    if (!detail.textValueCalculator) {
      return null;
    }
    return (
      <>
        <label>
          value:
          <select
            value={valueTypes.indexOf(detail.textValueCalculator.type)}
            onChange={(e) => {
              if (detail.textValueCalculator) {
                const newTextCalc = {
                  ...detail.textValueCalculator,
                  type: valueTypes[Number(e.target.value)],
                };
                onChanged({ textValueCalculator: newTextCalc });
              }
            }}
          >
            {valueTypes.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
        <Choice
          detail={detail.textValueCalculator.cardsChoice}
          onChanged={(x) => {
            if (detail.textValueCalculator) {
              const newChoice = {
                ...(detail.textValueCalculator.cardsChoice ?? choiceEmpty()),
                ...x,
              };
              const newTextCalc = {
                ...detail.textValueCalculator,
                cardChoice: newChoice,
              };
              onChanged({ textValueCalculator: newTextCalc });
            }
          }}
        ></Choice>
      </>
    );
  };

  const valueInput = () => {
    return detail.textValueCalculator ? dynamicValueInput() : pureValueInput();
  };

  const handleIsDynamicValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? textValueCalculatorEmpty() : undefined;

    onChanged({ textValueCalculator: newValue });
  };

  return (
    <>
      <label>
        動的?:
        <input
          type="checkbox"
          checked={detail.textValueCalculator !== undefined}
          onChange={handleIsDynamicValueChange}
        />
      </label>
      <div>{valueInput()}</div>
    </>
  );
};

export default TextValue;
