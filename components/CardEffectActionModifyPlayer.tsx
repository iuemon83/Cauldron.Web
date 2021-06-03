import { CardEffectActionModifyPlayerDetail } from "../types/CardEffectActionModifyPlayerDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";
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
      <FormSet label="修整方法">
        <PlayerModifier
          detail={detail.playerModifier}
          onChanged={(x) =>
            onChanged({
              playerModifier: { ...detail.playerModifier, ...x },
            })
          }
        ></PlayerModifier>
      </FormSet>
      <FormSet label="対象の選択条件">
        <Choice
          detail={detail.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...detail.choice, ...x },
            })
          }
        ></Choice>
      </FormSet>
    </>
  );
};

export default CardEffectActionModifyPlayer;
