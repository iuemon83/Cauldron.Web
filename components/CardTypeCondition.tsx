import { CardTypeConditionDetail } from "../types/CardTypeConditionDetail";
import { globalCache } from "./CauldronApi";
import { FormControlLabel, Checkbox, Switch } from "@material-ui/core";

interface Props {
  detail: CardTypeConditionDetail;
  onChanged: (detail: Partial<CardTypeConditionDetail>) => void;
}

const CardTypeCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const cardTypes = globalCache.metadata!.cardTypes;

  const handleAbilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
      const newlist = [...detail.value, cardTypes[index]];

      onChanged({ value: newlist });
    } else {
      const newlist = detail.value.filter((x) => x !== cardTypes[index]);

      onChanged({ value: newlist });
    }
  };

  return (
    <>
      <div>
        アビリティ:
        {cardTypes.map((e, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                value={index}
                checked={detail.value.indexOf(e) !== -1}
                onChange={handleAbilityChange}
              />
            }
            label={e}
          />
        ))}
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={detail.not}
              onChange={(e) => onChanged({ not: e.target.checked })}
            />
          }
          label="not?"
        />
      </div>
    </>
  );
};

export default CardTypeCondition;
