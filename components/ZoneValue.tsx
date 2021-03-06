import { useState } from "react";
import { choiceEmpty, zoneNames, ZoneValueDetail } from "./CauldronTypes";
import Choice from "./Choice";

interface Props {
  detail: ZoneValueDetail;
  onChanged: (detail: Partial<ZoneValueDetail>) => void;
}

const ZoneValue: React.FC<Props> = ({ detail, onChanged }) => {
  const [isDynamicValue, setIsDynamicValue] = useState(false);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
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
            <input type="checkbox" value={index} onChange={handleValueChange} />
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
