interface Props {
  label: string;
  detail: any;
  keyName: string;
  onChanged: (e: any) => void;
}

const InputText: React.FC<Props> = ({ label, detail, keyName, onChanged }) => {
  return (
    <label>
      {label}:
      <input
        type="text"
        value={detail[keyName]}
        onChange={(e) => onChanged({ [keyName]: e.target.value })}
      />
    </label>
  );
};

export default InputText;
