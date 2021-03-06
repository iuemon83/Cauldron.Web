import React from "react";
import CardEffect from "./CardEffect";
import {
  cardAbilities,
  CardDetail,
  CardEffectDetail,
  cardEffectEmpty,
  cardTypes,
} from "./CauldronTypes";

interface Props {
  detail: CardDetail;
  onChanged: (newValue: Partial<CardDetail>) => void;
}

const Card: React.FC<Props> = ({ detail, onChanged }) => {
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
        <label>
          種類:
          <select
            required
            value={cardTypes.indexOf(detail.type)}
            onChange={(e) =>
              onChanged({ type: cardTypes[Number(e.target.value)] })
            }
          >
            {cardTypes.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
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
        <label>
          タフネス:
          <input
            type="number"
            required
            value={detail.toughness}
            onChange={(e) => onChanged({ toughness: Number(e.target.value) })}
          />
        </label>
      </div>
      <div>
        アビリティ:
        {cardAbilities.map((e, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={index}
              onChange={handleAbilityChange}
            />
            {e}
          </label>
        ))}
      </div>

      <h2>
        効果
        <button onClick={() => addCardEffect()}>+</button>
        <button onClick={() => clearCardEffect()}>clear</button>
      </h2>
      {detail.effects.map((e, index) => (
        <div key={index}>
          <button onClick={() => removeCardEffect(index)}>-</button>
          <CardEffect
            detail={e}
            onChanged={(x) => onCardEffectChanged({ ...e, ...x }, index)}
          ></CardEffect>
        </div>
      ))}
    </section>
  );
};

export default Card;
