import { NumValueDetail } from "../types/NumValueDetail";

interface Props {
  detail: NumValueDetail;
  onChanged: (detail: Partial<NumValueDetail>) => void;
}

const NumValue: React.FC<Props> = ({ detail, onChanged }) => {
  const handleChangeHasPureValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      onChanged({ pureValue: 0 });
    } else {
      onChanged({ pureValue: undefined });
    }
  };

  return (
    <>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.pureValue !== undefined}
              onChange={handleChangeHasPureValue}
            />
            定数
          </label>
        </legend>
        <input
          type="number"
          value={detail.pureValue}
          onChange={(e) => onChanged({ pureValue: Number(e.target.value) })}
        />
      </fieldset>
    </>
  );
};

export default NumValue;
