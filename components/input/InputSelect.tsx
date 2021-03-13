interface Props {
  label: string;
  values: any[];
  value: any;
  onChange: (e: any) => void;
}

const InputSelect: React.FC<Props> = ({ label, values, value, onChange }) => {
  return (
    <label>
      {label}:
      <select value={value} onChange={onChange}>
        {values.map((e, index) => (
          <option key={index} value={index}>
            {e}
          </option>
        ))}
      </select>
    </label>
  );
};

export default InputSelect;
