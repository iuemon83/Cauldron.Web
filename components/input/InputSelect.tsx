interface Props<T> {
  label: string;
  values: T[keyof T][];
  detail: T;
  keyName: keyof T;
  onChanged: (e: any) => void;
}

const InputSelect = <T extends {}>({
  label,
  values,
  detail,
  keyName,
  onChanged,
}: Props<T>) => {
  return (
    <label>
      {label}:
      <select
        value={values.indexOf(detail[keyName])}
        onChange={(e) =>
          onChanged({
            [keyName]: values[Number(e.target.value)],
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
