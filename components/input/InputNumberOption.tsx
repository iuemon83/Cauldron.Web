import InputNumber from "./InputNumber";

interface Props {
  label: string;
  detail: any;
  keyName: string;
  onChanged: (e: any) => void;
}

const InputNumberOption: React.FC<Props> = ({
  label,
  detail,
  keyName,
  onChanged,
}) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={detail[keyName] !== undefined}
          onChange={(e) =>
            onChanged({
              [keyName]: e.target.checked ? 0 : undefined,
            })
          }
        />
        {label}:
      </label>
      {detail[keyName] !== undefined && (
        <InputNumber
          label=""
          detail={detail}
          keyName={keyName}
          onChanged={onChanged}
        />
      )}
    </>
  );
};

export default InputNumberOption;
