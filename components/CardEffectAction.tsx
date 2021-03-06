import { useState } from "react";
import CardEffectActionDamage from "./CardEffectActionDamage";
import {
  CardEffectActionDetail,
  CardEffectActionDamageDetail,
  choiceEmpty,
  CardEffectActionDamageEmpty,
} from "./CauldronTypes";

interface Props {
  detail: CardEffectActionDetail;
  onChanged: (detail: Partial<CardEffectActionDetail>) => void;
}

const CardEffectAction: React.FC<Props> = ({ detail, onChanged }) => {
  const effectActionTypes = ["", "damage", "addcard"] as const;

  const [effectActionTypeId, setEffectActionTypeId] = useState(0);

  const handleDamageChange = (x: Partial<CardEffectActionDamageDetail>) => {
    onChanged({
      damage: {
        ...(detail.damage ?? CardEffectActionDamageEmpty()),
        ...x,
      },
    });
  };

  const effectAction = () => {
    // 初期化
    if (detail.damage) {
      return (
        <CardEffectActionDamage
          detail={detail.damage}
          onChanged={handleDamageChange}
        ></CardEffectActionDamage>
      );
    } else {
      return null;
    }
  };

  const handleEffectActionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = Number(e.target.value);

    setEffectActionTypeId(id);

    const effectActionType = effectActionTypes[id];

    if (effectActionType === "damage") {
      const newValue = {
        damage: {
          value: 0,
          choice: choiceEmpty(),
        },
      };

      onChanged(newValue);
    }
  };

  return (
    <>
      <div>
        <select
          value={effectActionTypeId}
          onChange={handleEffectActionTypeChange}
        >
          {effectActionTypes.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </div>
      {effectAction()}
    </>
  );
};

export default CardEffectAction;
