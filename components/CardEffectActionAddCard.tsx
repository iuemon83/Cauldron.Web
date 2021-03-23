import { CardEffectActionAddCardDetail } from "../types/CardEffectActionAddCardDetail";
import Choice from "./Choice";
import ZoneValue from "./ZoneValue";

interface Props {
  detail: CardEffectActionAddCardDetail;
  onChanged: (newValue: Partial<CardEffectActionAddCardDetail>) => void;
}

const CardEffectActionAddCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <fieldset>
        <legend>生成先の領域</legend>
        <ZoneValue
          detail={detail.zoneToAddCard}
          onChanged={(x) =>
            onChanged({ zoneToAddCard: { ...detail.zoneToAddCard, ...x } })
          }
        ></ZoneValue>
      </fieldset>
      <fieldset>
        <legend>生成するカードの条件</legend>
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

export default CardEffectActionAddCard;
