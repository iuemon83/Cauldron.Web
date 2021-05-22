import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@material-ui/core";

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
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <FormControlLabel
            control={
              <Checkbox
                checked={detail[key] !== undefined}
                onChange={handleHasChange}
              />
            }
            label={label}
          />
        </FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          {detail[key] !== undefined && jtx(detail[key], handleChangeChild)}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default InputOption;
