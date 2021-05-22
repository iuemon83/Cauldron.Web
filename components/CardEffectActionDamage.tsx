import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import { CardEffectActionDamageDetail } from "../types/CardEffectActionDamageDetail";
import Choice from "./Choice";
import NumValue from "./NumValue";

interface Props {
  detail: CardEffectActionDamageDetail;
  onChanged: (newValue: Partial<CardEffectActionDamageDetail>) => void;
}

const CardEffectActionDamage: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">ダメージ値</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <NumValue
            detail={detail.value}
            onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}
          />
        </FormGroup>
      </FormControl>
      <Choice
        detail={detail.choice}
        onChanged={(x) =>
          onChanged({
            choice: { ...detail.choice, ...x },
          })
        }
      ></Choice>
    </>
  );
};

export default CardEffectActionDamage;
