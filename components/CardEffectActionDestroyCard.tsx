import { CardEffectActionDestroyCardDetail } from "../types/CardEffectActionDestroyCardDetail";
import Choice from "./Choice";

interface Props {
  detail: CardEffectActionDestroyCardDetail;
  onChanged: (newValue: Partial<CardEffectActionDestroyCardDetail>) => void;
}

const CardEffectActionDestroyCard: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  return (
    <>
      <fieldset>
        <legend>削除するカードの条件</legend>
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

export default CardEffectActionDestroyCard;
