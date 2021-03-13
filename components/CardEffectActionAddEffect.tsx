import { CardEffectActionAddEffectDetail } from "../types/CardEffectActionAddEffectDetail";
import { CardEffectDetail, cardEffectEmpty } from "../types/CardEffectDetail";
import CardEffect from "./CardEffect";
import Choice from "./Choice";

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
      効果
      <button onClick={() => addCardEffect()}>+</button>
      <button onClick={() => clearCardEffect()}>clear</button>
      {detail.effectToAdd.map((e, index) => (
        <fieldset key={index}>
          <button onClick={() => removeCardEffect(index)}>-</button>
          <CardEffect
            detail={e}
            onChanged={(x) => onCardEffectChanged({ ...e, ...x }, index)}
          ></CardEffect>
        </fieldset>
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
