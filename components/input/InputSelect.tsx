interface Props<T> {
  label: string;
  values: T[];
  value: T;
  onChanged: (e: any) => void;
}

const InputSelect = <T extends {}>({
  label,
  values,
  value,
  onChanged,
}: Props<T>) => {
  return (
    <label>
      {label}:
      <select
        value={values.indexOf(value)}
        onChange={(e) =>
          onChanged({
            context: values[Number(e.target.value)],
          })
        }
      >
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
