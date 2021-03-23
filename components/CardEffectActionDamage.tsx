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
      <fieldset>
        <legend>ダメージ値</legend>
        <NumValue
          detail={detail.value}
          onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}
        />
      </fieldset>
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
