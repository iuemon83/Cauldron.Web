import { CardEffectActionDamageDetail } from "../types/CardEffectActionDamageDetail";
import Choice from "./Choice";

interface Props {
  detail: CardEffectActionDamageDetail;
  onChanged: (newValue: Partial<CardEffectActionDamageDetail>) => void;
}

const CardEffectActionDamage: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <label>
          ダメージ値:
          <input
            type="number"
            value={detail.value}
            onChange={(e) => onChanged({ value: Number(e.target.value) })}
            required
          />
        </label>
      </div>
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
