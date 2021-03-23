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
      <fieldset>
        <legend>修整方法</legend>
        <NumValueModifier
          detail={detail.value}
          onChanged={(x) =>
            onChanged({
              value: { ...detail.value, ...x },
            })
          }
        ></NumValueModifier>
      </fieldset>
      <fieldset>
        <legend>対象の条件</legend>
        <Choice
          detail={detail.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...detail.choice, ...x },
            })
          }
        ></Choice>
      </fieldset>
    </>
  );
};

export default CardEffectActionModifyDamage;
