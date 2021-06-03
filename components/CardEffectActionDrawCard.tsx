import { CardEffectActionDrawCardDetail } from "../types/CardEffectActionDrawCardDetail";
import FormSet from "./input/FormSet";
import NumValue from "./NumValue";
import PlayerCondition from "./PlayerCondition";

interface Props {
  detail: CardEffectActionDrawCardDetail;
  onChanged: (newValue: Partial<CardEffectActionDrawCardDetail>) => void;
}

const CardEffectActionDrawCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <FormSet label="枚数">
        <NumValue
          detail={detail.numCards}
          onChanged={(x) =>
            onChanged({ numCards: { ...detail.numCards, ...x } })
          }
        ></NumValue>
      </FormSet>
      <FormSet label="対象のプレイヤー">
        <PlayerCondition
          detail={detail.playerCondition}
          onChanged={(x) =>
            onChanged({
              playerCondition: { ...detail.playerCondition, ...x },
            })
          }
        ></PlayerCondition>
      </FormSet>
    </>
  );
};

export default CardEffectActionDrawCard;
