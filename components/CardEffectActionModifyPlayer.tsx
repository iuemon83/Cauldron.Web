import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
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
      <FormControl component="fieldset">
        <FormLabel component="legend">修整方法</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <PlayerModifier
            detail={detail.playerModifier}
            onChanged={(x) =>
              onChanged({
                playerModifier: { ...detail.playerModifier, ...x },
              })
            }
          ></PlayerModifier>
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">対象の選択条件</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <Choice
            detail={detail.choice}
            onChanged={(x) =>
              onChanged({
                choice: { ...detail.choice, ...x },
              })
            }
          ></Choice>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default CardEffectActionModifyPlayer;
