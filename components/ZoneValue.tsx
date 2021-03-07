import { useState } from "react";
import { choiceEmpty } from "../types/ChoiceDetail";
import { zoneNames, ZoneValueDetail } from "../types/ZoneValueDetail";
import Choice from "./Choice";

interface Props {
  detail: ZoneValueDetail;
  onChanged: (detail: Partial<ZoneValueDetail>) => void;
}

const ZoneValue: React.FC<Props> = ({ detail, onChanged }) => {
  const [isDynamicValue, setIsDynamicValue] = useState(false);

  const handleValueChange = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const index = Number(e.currentTarget.value);

    if (e.currentTarget.checked) {
      const newlist = [...detail.pureValue, zoneNames[index]];

      onChanged({ pureValue: newlist });
    } else {
      const newlist = detail.pureValue.filter((x) => x !== zoneNames[index]);

      onChanged({ pureValue: newlist });
    }
  };

  const pureValueInput = () => {
    return (
      <>
        値:
        {zoneNames.map((e, index) => (
          <label key={index}>
            <input
              type="checkbox"
              readOnly
              value={index}
              checked={detail.pureValue.indexOf(e) !== -1}
              onClick={handleValueChange}
            />
            {e}
          </label>
        ))}
      </>
    );
  };

  const handleIsDynamicValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? choiceEmpty() : undefined;

    onChanged({ choice: newValue });
    setIsDynamicValue(e.target.checked);
  };

  const dynamicValueInput = () => {
    if (!detail.choice) {
      return null;
    }

    return (
      <Choice
        detail={detail.choice}
        onChanged={(x) => {
          onChanged({
            choice: { ...(detail.choice ?? choiceEmpty()), ...x },
          });
        }}
      ></Choice>
    );
  };

  const valueInput = () => {
    return detail.choice ? dynamicValueInput() : pureValueInput();
  };

  return (
    <>
      <label>
        動的?:
        <input
          type="checkbox"
          checked={isDynamicValue}
          onChange={handleIsDynamicValueChange}
        />
      </label>
      <div>{valueInput()}</div>
    </>
  );
};

export default ZoneValue;
