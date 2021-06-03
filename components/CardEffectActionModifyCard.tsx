import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import { CardEffectActionModifyCardDetail } from "../types/CardEffectActionModifyCardDetail";
import { numValueModifierEmpty } from "../types/NumValueModifierDetail";
import Choice from "./Choice";
import InputOption from "./input/InputOption";
import NumValueModifier from "./NumValueModifier";

interface Props {
  detail: CardEffectActionModifyCardDetail;
  onChanged: (newValue: Partial<CardEffectActionModifyCardDetail>) => void;
}

const CardEffectActionModifyCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputOption
        label="コスト"
        detail={detail}
        keyName="cost"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <NumValueModifier detail={d!} onChanged={h}></NumValueModifier>
        )}
      />
      <InputOption
        label="パワー"
        detail={detail}
        keyName="power"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <NumValueModifier detail={d!} onChanged={h}></NumValueModifier>
        )}
      />
      <InputOption
        label="タフネス"
        detail={detail}
        keyName="toughness"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <NumValueModifier detail={d!} onChanged={h}></NumValueModifier>
        )}
      />
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

export default CardEffectActionModifyCard;
