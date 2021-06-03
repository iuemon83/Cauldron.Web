import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import { CardEffectActionAddCardDetail } from "../types/CardEffectActionAddCardDetail";
import Choice from "./Choice";
import ZoneValue from "./ZoneValue";

interface Props {
  detail: CardEffectActionAddCardDetail;
  onChanged: (newValue: Partial<CardEffectActionAddCardDetail>) => void;
}

const CardEffectActionAddCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">生成先の領域</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <ZoneValue
            detail={detail.zoneToAddCard}
            onChanged={(x) =>
              onChanged({ zoneToAddCard: { ...detail.zoneToAddCard, ...x } })
            }
          ></ZoneValue>
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">生成するカードの選択条件</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <Choice
            detail={detail.choice}
            onChanged={(x) => onChanged({ choice: { ...detail.choice, ...x } })}
          ></Choice>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default CardEffectActionAddCard;
