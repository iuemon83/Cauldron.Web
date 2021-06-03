import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
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
      <FormControl component="fieldset">
        <FormLabel component="legend">削除するカードの選択条件</FormLabel>
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

export default CardEffectActionDestroyCard;
