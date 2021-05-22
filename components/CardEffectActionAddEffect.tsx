import { Button, FormControl, FormLabel } from "@material-ui/core";
import { CardEffectActionAddEffectDetail } from "../types/CardEffectActionAddEffectDetail";
import { CardEffectDetail, cardEffectEmpty } from "../types/CardEffectDetail";
import CardEffect from "./CardEffect";
import Choice from "./Choice";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

interface Props {
  detail: CardEffectActionAddEffectDetail;
  onChanged: (newValue: Partial<CardEffectActionAddEffectDetail>) => void;
}

const CardEffectActionAddEffect: React.FC<Props> = ({ detail, onChanged }) => {
  const clearCardEffect = () => {
    onChanged({ effectToAdd: [] });
  };

  const addCardEffect = () => {
    const newValue: CardEffectDetail = cardEffectEmpty();
    onChanged({
      effectToAdd: [...detail.effectToAdd, newValue],
    });
  };

  const removeCardEffect = (index: number) => {
    const newlist = [...detail.effectToAdd];
    newlist.splice(index, 1);

    onChanged({
      effectToAdd: newlist,
    });
  };

  const onCardEffectChanged = (x: CardEffectDetail, index: number) => {
    const newlist = [...detail.effectToAdd];
    newlist.splice(index, 1, x);
    onChanged({ effectToAdd: newlist });
  };

  return (
    <>
      <span>
        <Button
          variant="contained"
          onClick={() => addCardEffect()}
          color="primary"
          startIcon={<AddIcon />}
        />
        <Button
          variant="contained"
          onClick={() => clearCardEffect()}
          color="secondary"
        >
          Clear
        </Button>
      </span>
      {detail.effectToAdd.map((e, index) => (
        <FormControl
          component="fieldset"
          key={index}
          style={{ marginLeft: "2rem" }}
        >
          <FormLabel component="legend">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeCardEffect(index)}
              startIcon={<DeleteIcon />}
            />
          </FormLabel>
          <CardEffect
            detail={e}
            onChanged={(x) => onCardEffectChanged({ ...e, ...x }, index)}
          ></CardEffect>
        </FormControl>
      ))}
      <Choice
        detail={detail.cardsChoice}
        onChanged={(x) =>
          onChanged({
            cardsChoice: { ...detail.cardsChoice, ...x },
          })
        }
      ></Choice>
    </>
  );
};

export default CardEffectActionAddEffect;
