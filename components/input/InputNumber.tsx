interface Props {
  label: string;
  detail: any;
  keyName: string;
  onChanged: (e: any) => void;
}

const InputNumber: React.FC<Props> = ({
  label,
  detail,
  keyName,
  onChanged,
}) => {
  return (
    <label>
      {label}:
      <input
        type="number"
        value={detail[keyName]}
        onChange={(e) => onChanged({ [keyName]: Number(e.target.value) })}
      />
    </label>
  );
};

export default InputNumber;
