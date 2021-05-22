import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";

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
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        value={values.indexOf(detail[keyName])}
        onChange={(e) =>
          onChanged({
            [keyName]: values[Number(e.target.value)],
          })
        }
      >
        {values.map((e, index) => (
          <MenuItem key={index} value={index}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
