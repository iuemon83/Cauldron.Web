import { CardEffectActionDrawCardDetail } from "../types/CardEffectActionDrawCardDetail";
import NumValue from "./NumValue";
import PlayerCondition from "./PlayerCondition";

interface Props {
  detail: CardEffectActionDrawCardDetail;
  onChanged: (newValue: Partial<CardEffectActionDrawCardDetail>) => void;
}

const CardEffectActionDrawCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <fieldset>
        <legend>枚数</legend>
        <NumValue
          detail={detail.numCards}
          onChanged={(x) =>
            onChanged({ numCards: { ...detail.numCards, ...x } })
          }
        ></NumValue>
      </fieldset>
      <fieldset>
        <legend>対象のプレイヤー</legend>
        <PlayerCondition
          detail={detail.playerCondition}
          onChanged={(x) =>
            onChanged({
              playerCondition: { ...detail.playerCondition, ...x },
            })
          }
        ></PlayerCondition>
      </fieldset>
    </>
  );
};

export default CardEffectActionDrawCard;
