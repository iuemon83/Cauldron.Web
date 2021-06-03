import { CardEffectActionAddCardDetail } from "../types/CardEffectActionAddCardDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";
import ZoneValue from "./ZoneValue";

interface Props {
  detail: CardEffectActionAddCardDetail;
  onChanged: (newValue: Partial<CardEffectActionAddCardDetail>) => void;
}

const CardEffectActionAddCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <FormSet label="生成先の領域">
        <ZoneValue
          detail={detail.zoneToAddCard}
          onChanged={(x) =>
            onChanged({ zoneToAddCard: { ...detail.zoneToAddCard, ...x } })
          }
        ></ZoneValue>
      </FormSet>
      <FormSet label="生成するカードの選択条件">
        <Choice
          detail={detail.choice}
          onChanged={(x) => onChanged({ choice: { ...detail.choice, ...x } })}
        ></Choice>
      </FormSet>
    </>
  );
};

export default CardEffectActionAddCard;
