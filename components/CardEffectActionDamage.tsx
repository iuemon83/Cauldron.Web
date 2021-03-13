import { CardEffectActionDamageDetail } from "../types/CardEffectActionDamageDetail";
import Choice from "./Choice";
import InputNumber from "./input/InputNumber";

interface Props {
  detail: CardEffectActionDamageDetail;
  onChanged: (newValue: Partial<CardEffectActionDamageDetail>) => void;
}

const CardEffectActionDamage: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputNumber
        label="ダメージ値"
        detail={detail}
        keyName="value"
        onChanged={onChanged}
      />
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
