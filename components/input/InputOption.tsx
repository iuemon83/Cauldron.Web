interface Props<K extends {}, T extends keyof K> {
  label: string;
  detail: K;
  keyName: T;
  empty: () => K[T];
  onChanged: (detail: Partial<K>) => void;
  jtx: (d: K[T], h: (x: Partial<K[T]>) => void) => any;
}

const InputOption = <K extends {}, T extends keyof K>({
  label,
  detail,
  keyName: key,
  empty,
  onChanged,
  jtx,
}: Props<K, T>) => {
  const handleChangeChild = (x: Partial<K[T]>) => {
    const p: any = {
      [key]: {
        ...(detail[key] ?? empty()),
        ...x,
      },
    };
    onChanged(p);
  };

  const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked ? empty() : undefined;
    const p: any = { [key]: newValue };
    onChanged(p);
  };

  return (
    <>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail[key] !== undefined}
              onChange={handleHasChange}
            ></input>
            {label}
          </label>
        </legend>
        {detail[key] !== undefined && jtx(detail[key], handleChangeChild)}
      </fieldset>
    </>
  );
};

export default InputOption;
