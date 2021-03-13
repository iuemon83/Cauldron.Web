import { CardEffectActionAddCardEmpty } from "../types/CardEffectActionAddCardDetail";
import { cardEffectActionAddEffectEmpty } from "../types/CardEffectActionAddEffectDetail";
import { CardEffectActionDamageEmpty } from "../types/CardEffectActionDamageDetail";
import { CardEffectActionDestroyCardEmpty } from "../types/CardEffectActionDestroyCardDetail";
import { CardEffectActionDetail } from "../types/CardEffectActionDetail";
import { CardEffectActionDrawCardEmpty } from "../types/CardEffectActionDrawCardDetail";
import { CardEffectActionModifyCardEmpty } from "../types/CardEffectActionModifyCardDetail";
import { CardEffectActionModifyDamageEmpty } from "../types/CardEffectActionModifyDamageDetail";
import { cardEffectActionModifyPlayerEmpty } from "../types/CardEffectActionModifyPlayerDetail";
import { cardEffectActionMoveCardEmpty } from "../types/CardEffectActionMoveCardDetail";
import CardEffectActionAddCard from "./CardEffectActionAddCard";
import CardEffectActionAddEffect from "./CardEffectActionAddEffect";
import CardEffectActionDamage from "./CardEffectActionDamage";
import CardEffectActionDestroyCard from "./CardEffectActionDestroyCard";
import CardEffectActionDrawCard from "./CardEffectActionDrawCard";
import CardEffectActionModifyCard from "./CardEffectActionModifyCard";
import CardEffectActionModifyDamage from "./CardEffectActionModifyDamage";
import CardEffectActionModifyPlayer from "./CardEffectActionModifyPlayer";
import CardEffectActionMoveCard from "./CardEffectActionMoveCard";

interface Props {
  detail: CardEffectActionDetail;
  onChanged: (detail: Partial<CardEffectActionDetail>) => void;
}

const CardEffectAction: React.FC<Props> = ({ detail, onChanged }) => {
  const optionValueInput = <
    T extends keyof typeof detail,
    U extends typeof detail[T]
  >(
    label: string,
    key: T,
    empty: () => U,
    jtx: (d: any, h: (x: Partial<U>) => void) => any
  ): any => {
    const handleChangeChild = (x: Partial<U>) => {
      onChanged({
        [key]: {
          ...(detail[key] ?? empty()),
          ...x,
        },
      });
    };

    const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked ? empty() : undefined;

      onChanged({ [key]: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail[key] !== undefined}
                onChange={handleHasChange}
              ></input>
              {label}
            </label>
          </legend>
          {detail[key] && jtx(detail[key], handleChangeChild)}
        </fieldset>
      </>
    );
  };

  return (
    <>
      {optionValueInput(
        "ダメージ",
        "damage",
        CardEffectActionDamageEmpty,
        (d, h) => (
          <CardEffectActionDamage
            detail={d}
            onChanged={h}
          ></CardEffectActionDamage>
        )
      )}
      {optionValueInput(
        "カードの生成",
        "addCard",
        CardEffectActionAddCardEmpty,
        (d, h) => (
          <CardEffectActionAddCard
            detail={d}
            onChanged={h}
          ></CardEffectActionAddCard>
        )
      )}
      {optionValueInput(
        "カードの修整",
        "modifyCard",
        CardEffectActionModifyCardEmpty,
        (d, h) => (
          <CardEffectActionModifyCard
            detail={d}
            onChanged={h}
          ></CardEffectActionModifyCard>
        )
      )}
      {optionValueInput(
        "カードの破壊",
        "destroyCard",
        CardEffectActionDestroyCardEmpty,
        (d, h) => (
          <CardEffectActionDestroyCard
            detail={d}
            onChanged={h}
          ></CardEffectActionDestroyCard>
        )
      )}
      {optionValueInput(
        "カードの移動",
        "moveCard",
        cardEffectActionMoveCardEmpty,
        (d, h) => (
          <CardEffectActionMoveCard
            detail={d}
            onChanged={h}
          ></CardEffectActionMoveCard>
        )
      )}
      {optionValueInput(
        "ダメージの修整",
        "modifyDamage",
        CardEffectActionModifyDamageEmpty,
        (d, h) => (
          <CardEffectActionModifyDamage
            detail={d}
            onChanged={h}
          ></CardEffectActionModifyDamage>
        )
      )}
      {optionValueInput(
        "プレイヤーの修整",
        "modifyPlayer",
        cardEffectActionModifyPlayerEmpty,
        (d, h) => (
          <CardEffectActionModifyPlayer
            detail={d}
            onChanged={h}
          ></CardEffectActionModifyPlayer>
        )
      )}
      {optionValueInput(
        "ドロー",
        "drawCard",
        CardEffectActionDrawCardEmpty,
        (d, h) => (
          <CardEffectActionDrawCard
            detail={d}
            onChanged={h}
          ></CardEffectActionDrawCard>
        )
      )}
      {optionValueInput(
        "効果の追加",
        "addEffect",
        cardEffectActionAddEffectEmpty,
        (d, h) => (
          <CardEffectActionAddEffect
            detail={d}
            onChanged={h}
          ></CardEffectActionAddEffect>
        )
      )}
    </>
  );
};

export default CardEffectAction;
