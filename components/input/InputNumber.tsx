import { TextField } from "@material-ui/core";

interface Props {
  label: string;
  detail: any;
  keyName: string;
  onChanged: (e: any) => void;
  className?: string;
}

const InputNumber: React.FC<Props> = ({
  label,
  detail,
  keyName,
  onChanged,
  className,
}) => {
  return (
    <TextField
      label={label}
      type="number"
      value={detail[keyName]}
      onChange={(e) => onChanged({ [keyName]: Number(e.target.value) })}
      className={className}
    />
  );
};

export default InputNumber;
