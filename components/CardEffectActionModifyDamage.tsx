import { CardEffectActionModifyDamageDetail } from "../types/CardEffectActionModifyDamageDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";
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
      <FormSet label="修整方法">
        <NumValueModifier
          detail={detail.value}
          onChanged={(x) =>
            onChanged({
              value: { ...detail.value, ...x },
            })
          }
        ></NumValueModifier>
      </FormSet>
      <FormSet label="対象の選択条件">
        <Choice
          detail={detail.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...detail.choice, ...x },
            })
          }
        ></Choice>
      </FormSet>
    </>
  );
};

export default CardEffectActionModifyDamage;
