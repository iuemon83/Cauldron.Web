import { CardEffectActionModifyCardDetail } from "../types/CardEffectActionModifyCardDetail";
import Choice from "./Choice";
import NumValue from "./NumValue";

interface Props {
  detail: CardEffectActionModifyCardDetail;
  onChanged: (newValue: Partial<CardEffectActionModifyCardDetail>) => void;
}

const CardEffectActionModifyCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <label>
        パワー:
        <NumValue
          detail={detail.power}
          onChanged={(x) => onChanged({ power: { ...detail.power, ...x } })}
        ></NumValue>
      </label>
      <label>
        タフネス:
        <NumValue
          detail={detail.toughness}
          onChanged={(x) =>
            onChanged({ toughness: { ...detail.toughness, ...x } })
          }
        ></NumValue>
      </label>
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

export default CardEffectActionModifyCard;
