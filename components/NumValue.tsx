import { NumValueDetail } from "../types/NumValueDetail";
import { numValueModifierEmpty } from "../types/NumValueModifierDetail";
import NumValueModifier from "./NumValueModifier";

interface Props {
  detail: NumValueDetail;
  onChanged: (detail: Partial<NumValueDetail>) => void;
}

const NumValue: React.FC<Props> = ({ detail, onChanged }) => {
  const PureValue = () => {
    const handleChangeHasValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        onChanged({ pureValue: 0 });
      } else {
        onChanged({ pureValue: undefined });
      }
    };

    return (
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.pureValue !== undefined}
              onChange={handleChangeHasValue}
            />
            定数
          </label>
        </legend>
        {detail.pureValue !== undefined && (
          <input
            type="number"
            value={detail.pureValue}
            onChange={(e) => onChanged({ pureValue: Number(e.target.value) })}
          />
        )}
      </fieldset>
    );
  };

  const NumValueModify = () => {
    const handleChangeHasValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        onChanged({ numValueModifier: numValueModifierEmpty() });
      } else {
        onChanged({ numValueModifier: undefined });
      }
    };

    return (
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.numValueModifier !== undefined}
              onChange={handleChangeHasValue}
            />
            演算
          </label>
        </legend>
        {detail.numValueModifier !== undefined && (
          <NumValueModifier
            detail={detail.numValueModifier}
            onChanged={(x) => {
              if (detail.numValueModifier !== undefined) {
                onChanged({
                  numValueModifier: { ...detail.numValueModifier, ...x },
                });
              }
            }}
          ></NumValueModifier>
        )}
      </fieldset>
    );
  };

  return (
    <>
      <PureValue></PureValue>
      <NumValueModify></NumValueModify>
    </>
  );
};

export default NumValue;
