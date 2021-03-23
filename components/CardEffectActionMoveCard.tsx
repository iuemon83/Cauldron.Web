import { CardEffectActionMoveCardDetail } from "../types/CardEffectActionMoveCardDetail";
import { globalCache } from "./CauldronApi";
import Choice from "./Choice";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectActionMoveCardDetail;
  onChanged: (newValue: Partial<CardEffectActionMoveCardDetail>) => void;
}

const CardEffectActionMoveCard: React.FC<Props> = ({ detail, onChanged }) => {
  const zoneNames = globalCache.metadata!.zoneNames;

  return (
    <>
      <InputSelect
        label="移動先"
        values={zoneNames}
        detail={detail}
        keyName={"to"}
        onChanged={onChanged}
      />
      <Choice
        detail={detail.cardsChoice}
        onChanged={(x) =>
          onChanged({
            cardsChoice: { ...detail.cardsChoice, ...x },
          })
        }
      ></Choice>
    </>
  );
};

export default CardEffectActionMoveCard;
