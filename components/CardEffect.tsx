import CardEffectAction from "./CardEffectAction";
import CardEffectTiming from "./CardEffectTiming";
import { CardEffectActionDetail, CardEffectDetail } from "./CauldronTypes";

interface Props {
  detail: CardEffectDetail;
  onChanged: (detail: Partial<CardEffectDetail>) => void;
}

const CardEffect: React.FC<Props> = ({ detail, onChanged }) => {
  const handleCardEffectActionChange = (x: Partial<CardEffectActionDetail>) => {
    const newActions = [...detail.actions];
    newActions[0] = { ...detail.actions[0], ...x };

    onChanged({
      ...detail,
      actions: newActions,
    });
  };

  return (
    <>
      <CardEffectTiming></CardEffectTiming>
      <CardEffectAction
        detail={detail.actions[0]}
        onChanged={handleCardEffectActionChange}
      ></CardEffectAction>
    </>
  );
};

export default CardEffect;
