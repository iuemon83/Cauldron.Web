import { CardEffectActionDetail } from "../types/CardEffectActionDetail";
import { CardEffectConditionDetail } from "../types/CardEffectConditionDetail";
import { CardEffectDetail } from "../types/CardEffectDetail";
import CardEffectAction from "./CardEffectAction";
import CardEffectCondition from "./CardEffectCondition";
import { FormControl, FormGroup, FormLabel } from "@material-ui/core";

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
      <FormControl component="fieldset">
        <FormLabel component="legend">条件</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <CardEffectCondition
            detail={detail.condition}
            onChanged={handleChangeCardEffectCondition}
          ></CardEffectCondition>
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">アクション</FormLabel>
        <FormGroup style={{ marginLeft: "2rem" }}>
          <CardEffectAction
            detail={detail.actions[0]}
            onChanged={handleCardEffectActionChange}
          ></CardEffectAction>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default CardEffect;
