import { CardEffectActionModifyPlayerDetail } from "../types/CardEffectActionModifyPlayerDetail";
import Choice from "./Choice";
import PlayerModifier from "./PlayerModifier";

interface Props {
  detail: CardEffectActionModifyPlayerDetail;
  onChanged: (newValue: Partial<CardEffectActionModifyPlayerDetail>) => void;
}

const CardEffectActionModifyPlayer: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  return (
    <>
      <fieldset>
        <legend>修整方法</legend>
        <PlayerModifier
          detail={detail.playerModifier}
          onChanged={(x) =>
            onChanged({
              playerModifier: { ...detail.playerModifier, ...x },
            })
          }
        ></PlayerModifier>
      </fieldset>
      <fieldset>
        <legend>対象の選択条件</legend>
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

export default CardEffectActionModifyPlayer;
