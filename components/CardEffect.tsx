import { CardEffectActionDetail } from "../types/CardEffectActionDetail";
import { CardEffectConditionDetail } from "../types/CardEffectConditionDetail";
import { CardEffectDetail } from "../types/CardEffectDetail";
import CardEffectAction from "./CardEffectAction";
import CardEffectCondition from "./CardEffectCondition";
import FormSet from "./input/FormSet";

interface Props {
  detail: CardEffectDetail;
  onChanged: (detail: Partial<CardEffectDetail>) => void;
}

const CardEffect: React.FC<Props> = ({ detail, onChanged }) => {
  const handleChangeCardEffectCondition = (
    x: Partial<CardEffectConditionDetail>
  ) => {
    onChanged({
      ...detail,
      condition: { ...detail.condition, ...x },
    });
  };

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
      <FormSet label="条件">
        <CardEffectCondition
          detail={detail.condition}
          onChanged={handleChangeCardEffectCondition}
        ></CardEffectCondition>
      </FormSet>

      <FormSet label="アクション">
        <CardEffectAction
          detail={detail.actions[0]}
          onChanged={handleCardEffectActionChange}
        ></CardEffectAction>
      </FormSet>
    </>
  );
};

export default CardEffect;
