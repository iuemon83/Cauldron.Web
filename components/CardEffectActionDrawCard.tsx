import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
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
      <FormControl component="fieldset">
        <FormLabel component="legend">枚数</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <NumValue
            detail={detail.numCards}
            onChanged={(x) =>
              onChanged({ numCards: { ...detail.numCards, ...x } })
            }
          ></NumValue>
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">対象のプレイヤー</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <PlayerCondition
            detail={detail.playerCondition}
            onChanged={(x) =>
              onChanged({
                playerCondition: { ...detail.playerCondition, ...x },
              })
            }
          ></PlayerCondition>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default CardEffectActionDrawCard;
