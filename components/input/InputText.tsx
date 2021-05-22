import { TextField } from "@material-ui/core";

interface Props {
  label: string;
  detail: any;
  keyName: string;
  onChanged: (e: any) => void;
}

const InputText: React.FC<Props> = ({ label, detail, keyName, onChanged }) => {
  return (
    <TextField
      label={label}
      value={detail[keyName]}
      onChange={(e) => onChanged({ [keyName]: e.target.value })}
    />
  );
};

export default InputText;
