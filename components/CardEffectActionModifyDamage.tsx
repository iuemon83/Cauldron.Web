import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import { CardEffectActionModifyDamageDetail } from "../types/CardEffectActionModifyDamageDetail";
import Choice from "./Choice";
import NumValueModifier from "./NumValueModifier";

interface Props {
  detail: CardEffectActionModifyDamageDetail;
  onChanged: (newValue: Partial<CardEffectActionModifyDamageDetail>) => void;
}

const CardEffectActionModifyDamage: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">修整方法</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <NumValueModifier
            detail={detail.value}
            onChanged={(x) =>
              onChanged({
                value: { ...detail.value, ...x },
              })
            }
          ></NumValueModifier>
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">対象の選択条件</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <Choice
            detail={detail.choice}
            onChanged={(x) =>
              onChanged({
                choice: { ...detail.choice, ...x },
              })
            }
          ></Choice>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default CardEffectActionModifyDamage;
