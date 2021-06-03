import { CardEffectActionDamageDetail } from "../types/CardEffectActionDamageDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";
import NumValue from "./NumValue";

interface Props {
  detail: CardEffectActionDamageDetail;
  onChanged: (newValue: Partial<CardEffectActionDamageDetail>) => void;
}

const CardEffectActionDamage: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <FormSet label="ダメージ値">
        <NumValue
          detail={detail.value}
          onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}
        />
      </FormSet>
      <FormSet label="ダメージを与える対象の選択条件">
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

export default CardEffectActionDamage;
