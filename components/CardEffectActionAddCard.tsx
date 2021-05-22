import { CardEffectActionAddCardDetail } from "../types/CardEffectActionAddCardDetail";
import { choiceEmpty } from "../types/ChoiceDetail";
import { zoneValueEmpty } from "../types/ZoneValueDetail";
import Choice from "./Choice";
import InputOption from "./input/InputOption";
import ZoneValue from "./ZoneValue";

interface Props {
  detail: CardEffectActionAddCardDetail;
  onChanged: (newValue: Partial<CardEffectActionAddCardDetail>) => void;
}

const CardEffectActionAddCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputOption
        label="生成先の領域"
        detail={detail}
        keyName="zoneToAddCard"
        empty={zoneValueEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ZoneValue detail={d!} onChanged={h}></ZoneValue>}
      />
      <InputOption
        label="生成するカードの条件"
        detail={detail}
        keyName="choice"
        empty={choiceEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <Choice detail={d!} onChanged={h}></Choice>}
      />
    </>
  );
};

export default CardEffectActionAddCard;
