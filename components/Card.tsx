import React from "react";
import { CardDetail } from "../types/CardDetail";
import { CardEffectDetail, cardEffectEmpty } from "../types/CardEffectDetail";
import CardEffect from "./CardEffect";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardDetail;
  onChanged: (newValue: Partial<CardDetail>) => void;
}

const Card: React.FC<Props> = ({ detail, onChanged }) => {
  const cardTypes = globalCache.metadata!.cardTypes;
  const cardAbilities = globalCache.metadata!.cardAbilities;

  const clearCardEffect = () => {
    onChanged({ effects: [] });
  };

  const addCardEffect = () => {
    const newValue: CardEffectDetail = cardEffectEmpty();
    onChanged({
      effects: [...detail.effects, newValue],
    });
  };

  const removeCardEffect = (index: number) => {
    const newlist = [...detail.effects];
    newlist.splice(index, 1);

    onChanged({
      effects: newlist,
    });
  };

  const onCardEffectChanged = (x: CardEffectDetail, index: number) => {
    const newlist = [...detail.effects];
    newlist.splice(index, 1, x);
    onChanged({ effects: newlist });
  };

  const handleAbilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
      const newlist = [...detail.abilities, cardAbilities[index]];

      onChanged({ abilities: newlist });
    } else {
      const newlist = detail.abilities.filter(
        (x) => x !== cardAbilities[index]
      );

      onChanged({ abilities: newlist });
    }
  };

  return (
    <section>
      <div>
        <label>
          コスト:
          <input
            type="number"
            required
            value={detail.cost}
            onChange={(e) => onChanged({ cost: Number(e.target.value) })}
          />
        </label>
      </div>
      <div>
        <label>
          名前:
          <input
            type="text"
            required
            value={detail.name}
            onChange={(e) => onChanged({ name: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          フレーバーテキスト:
          <textarea
            value={detail.flavorText}
            onChange={(e) => onChanged({ flavorText: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          トークン:
          <input
            type="checkbox"
            checked={detail.isToken}
            onChange={(e) => onChanged({ isToken: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <InputSelect
          label="種類"
          values={cardTypes}
          value={cardTypes.indexOf(detail.type)}
          onChange={(e) =>
            onChanged({ type: cardTypes[Number(e.target.value)] })
          }
        />
      </div>
      <div>
        <label>
          パワー:
          <input
            type="number"
            required
            value={detail.power}
            onChange={(e) => onChanged({ power: Number(e.target.value) })}
          />
        </label>
      </div>
      <div>
        <InputNumber
          label="タフネス"
          detail={detail}
          keyName="toughness"
          onChanged={onChanged}
        />
      </div>
      <div>
        アビリティ:
        {cardAbilities.map((e, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={index}
              checked={detail.abilities.indexOf(e) !== -1}
              onChange={handleAbilityChange}
            />
            {e}
          </label>
        ))}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={detail.numTurnsToCanAttack !== undefined}
            onChange={(e) =>
              onChanged({
                numTurnsToCanAttack: e.target.checked ? 0 : undefined,
              })
            }
          />
          攻撃可能となるまでのターン数:
        </label>
        {detail.numTurnsToCanAttack !== undefined && (
          <input
            type="number"
            value={detail.numTurnsToCanAttack}
            onChange={(e) => onChanged({ cost: Number(e.target.value) })}
          />
        )}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={detail.numAttacksLimitInTurn !== undefined}
            onChange={(e) =>
              onChanged({
                numAttacksLimitInTurn: e.target.checked ? 0 : undefined,
              })
            }
          />
          1ターン中に攻撃可能な回数:
        </label>
        {detail.numAttacksLimitInTurn !== undefined && (
          <input
            type="number"
            value={detail.numAttacksLimitInTurn}
            onChange={(e) =>
              onChanged({ numAttacksLimitInTurn: Number(e.target.value) })
            }
          />
        )}
      </div>
      効果
      <button onClick={() => addCardEffect()}>+</button>
      <button onClick={() => clearCardEffect()}>clear</button>
      {detail.effects.map((e, index) => (
        <fieldset key={index}>
          <button onClick={() => removeCardEffect(index)}>-</button>
          <CardEffect
            detail={e}
            onChanged={(x) => onCardEffectChanged({ ...e, ...x }, index)}
          ></CardEffect>
        </fieldset>
      ))}
    </section>
  );
};

export default Card;
