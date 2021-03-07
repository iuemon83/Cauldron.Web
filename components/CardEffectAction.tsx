import { CardEffectActionAddCardEmpty } from "../types/CardEffectActionAddCardDetail";
import { CardEffectActionDamageEmpty } from "../types/CardEffectActionDamageDetail";
import { CardEffectActionDestroyCardEmpty } from "../types/CardEffectActionDestroyCardDetail";
import { CardEffectActionDetail } from "../types/CardEffectActionDetail";
import { CardEffectActionDrawCardEmpty } from "../types/CardEffectActionDrawCardDetail";
import { CardEffectActionModifyCardEmpty } from "../types/CardEffectActionModifyCardDetail";
import { CardEffectActionModifyDamageEmpty } from "../types/CardEffectActionModifyDamageDetail";
import { cardEffectActionModifyPlayerEmpty } from "../types/CardEffectActionModifyPlayerDetail";
import CardEffectActionAddCard from "./CardEffectActionAddCard";
import CardEffectActionDamage from "./CardEffectActionDamage";
import CardEffectActionDestroyCard from "./CardEffectActionDestroyCard";
import CardEffectActionDrawCard from "./CardEffectActionDrawCard";
import CardEffectActionModifyCard from "./CardEffectActionModifyCard";
import CardEffectActionModifyDamage from "./CardEffectActionModifyDamage";
import CardEffectActionModifyPlayer from "./CardEffectActionModifyPlayer";

interface Props {
  detail: CardEffectActionDetail;
  onChanged: (detail: Partial<CardEffectActionDetail>) => void;
}

const CardEffectAction: React.FC<Props> = ({ detail, onChanged }) => {
  // const damageInput = () => {
  //   const handleChangeChild = (x: Partial<CardEffectActionDamageDetail>) => {
  //     onChanged({
  //       damage: {
  //         ...(detail.damage ?? CardEffectActionDamageEmpty()),
  //         ...x,
  //       },
  //     });
  //   };

  //   const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.checked
  //       ? CardEffectActionDamageEmpty()
  //       : undefined;

  //     onChanged({ damage: newValue });
  //   };

  //   return (
  //     <>
  //       <fieldset>
  //         <legend>
  //           <label>
  //             <input
  //               type="checkbox"
  //               checked={detail.damage !== undefined}
  //               onChange={handleHasChange}
  //             ></input>
  //             ダメージ
  //           </label>
  //         </legend>
  //         {detail.damage && (
  //           <CardEffectActionDamage
  //             detail={detail.damage}
  //             onChanged={handleChangeChild}
  //           ></CardEffectActionDamage>
  //         )}
  //       </fieldset>
  //     </>
  //   );
  // };

  // const addCardInput = () => {
  //   const handleChangeChild = (x: Partial<CardEffectActionAddCardDetail>) => {
  //     onChanged({
  //       addCard: {
  //         ...(detail.addCard ?? CardEffectActionAddCardEmpty()),
  //         ...x,
  //       },
  //     });
  //   };

  //   const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.checked
  //       ? CardEffectActionAddCardEmpty()
  //       : undefined;

  //     onChanged({ addCard: newValue });
  //   };

  //   return (
  //     <>
  //       <fieldset>
  //         <legend>
  //           <label>
  //             <input
  //               type="checkbox"
  //               checked={detail.addCard !== undefined}
  //               onChange={handleHasChange}
  //             ></input>
  //             カードの生成
  //           </label>
  //         </legend>
  //         {detail.addCard && (
  //           <CardEffectActionAddCard
  //             detail={detail.addCard}
  //             onChanged={handleChangeChild}
  //           ></CardEffectActionAddCard>
  //         )}
  //       </fieldset>
  //     </>
  //   );
  // };

  // const modifyCardInput = () => {
  //   const handleChangeChild = (
  //     x: Partial<CardEffectActionModifyCardDetail>
  //   ) => {
  //     onChanged({
  //       modifyCard: {
  //         ...(detail.modifyCard ?? CardEffectActionModifyCardEmpty()),
  //         ...x,
  //       },
  //     });
  //   };

  //   const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.checked
  //       ? CardEffectActionModifyCardEmpty()
  //       : undefined;

  //     onChanged({ modifyCard: newValue });
  //   };

  //   return (
  //     <>
  //       <fieldset>
  //         <legend>
  //           <label>
  //             <input
  //               type="checkbox"
  //               checked={detail.modifyCard !== undefined}
  //               onChange={handleHasChange}
  //             ></input>
  //             カードの修整
  //           </label>
  //         </legend>
  //         {detail.modifyCard && (
  //           <CardEffectActionModifyCard
  //             detail={detail.modifyCard}
  //             onChanged={handleChangeChild}
  //           ></CardEffectActionModifyCard>
  //         )}
  //       </fieldset>
  //     </>
  //   );
  // };

  // const destroyCardInput = () => {
  //   const handleChangeChild = (
  //     x: Partial<CardEffectActionDestroyCardDetail>
  //   ) => {
  //     onChanged({
  //       destroyCard: {
  //         ...(detail.destroyCard ?? CardEffectActionDestroyCardEmpty()),
  //         ...x,
  //       },
  //     });
  //   };

  //   const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.checked
  //       ? CardEffectActionDestroyCardEmpty()
  //       : undefined;

  //     onChanged({ destroyCard: newValue });
  //   };

  //   return (
  //     <>
  //       <fieldset>
  //         <legend>
  //           <label>
  //             <input
  //               type="checkbox"
  //               checked={detail.destroyCard !== undefined}
  //               onChange={handleHasChange}
  //             ></input>
  //             カードの破壊
  //           </label>
  //         </legend>
  //         {detail.destroyCard && (
  //           <CardEffectActionDestroyCard
  //             detail={detail.destroyCard}
  //             onChanged={handleChangeChild}
  //           ></CardEffectActionDestroyCard>
  //         )}
  //       </fieldset>
  //     </>
  //   );
  // };

  // const modifyDamageInput = () => {
  //   const handleChangeChild = (
  //     x: Partial<CardEffectActionModifyDamageDetail>
  //   ) => {
  //     onChanged({
  //       modifyDamage: {
  //         ...(detail.modifyDamage ?? CardEffectActionModifyDamageEmpty()),
  //         ...x,
  //       },
  //     });
  //   };

  //   const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.checked
  //       ? CardEffectActionModifyDamageEmpty()
  //       : undefined;

  //     onChanged({ modifyDamage: newValue });
  //   };

  //   return (
  //     <>
  //       <fieldset>
  //         <legend>
  //           <label>
  //             <input
  //               type="checkbox"
  //               checked={detail.modifyDamage !== undefined}
  //               onChange={handleHasChange}
  //             ></input>
  //             ダメージの修整
  //           </label>
  //         </legend>
  //         {detail.modifyDamage && (
  //           <CardEffectActionModifyDamage
  //             detail={detail.modifyDamage}
  //             onChanged={handleChangeChild}
  //           ></CardEffectActionModifyDamage>
  //         )}
  //       </fieldset>
  //     </>
  //   );
  // };

  // const modifyPlayerInput = () => {
  //   const handleChangeChild = (
  //     x: Partial<CardEffectActionModifyPlayerDetail>
  //   ) => {
  //     onChanged({
  //       modifyPlayer: {
  //         ...(detail.modifyPlayer ?? cardEffectActionModifyPlayerEmpty()),
  //         ...x,
  //       },
  //     });
  //   };

  //   const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.checked
  //       ? cardEffectActionModifyPlayerEmpty()
  //       : undefined;

  //     onChanged({ modifyPlayer: newValue });
  //   };

  //   return (
  //     <>
  //       <fieldset>
  //         <legend>
  //           <label>
  //             <input
  //               type="checkbox"
  //               checked={detail.modifyPlayer !== undefined}
  //               onChange={handleHasChange}
  //             ></input>
  //             プレイヤーの修整
  //           </label>
  //         </legend>
  //         {detail.modifyPlayer && (
  //           <CardEffectActionModifyPlayer
  //             detail={detail.modifyPlayer}
  //             onChanged={handleChangeChild}
  //           ></CardEffectActionModifyPlayer>
  //         )}
  //       </fieldset>
  //     </>
  //   );
  // };

  // const drawCardInput = () => {
  //   const handleChangeChild = (x: Partial<CardEffectActionDrawCardDetail>) => {
  //     onChanged({
  //       drawCard: {
  //         ...(detail.drawCard ?? CardEffectActionDrawCardEmpty()),
  //         ...x,
  //       },
  //     });
  //   };

  //   const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.checked
  //       ? CardEffectActionDrawCardEmpty()
  //       : undefined;

  //     onChanged({ drawCard: newValue });
  //   };

  //   return (
  //     <>
  //       <fieldset>
  //         <legend>
  //           <label>
  //             <input
  //               type="checkbox"
  //               checked={detail.drawCard !== undefined}
  //               onChange={handleHasChange}
  //             ></input>
  //             ドロー
  //           </label>
  //         </legend>
  //         {detail.drawCard && (
  //           <CardEffectActionDrawCard
  //             detail={detail.drawCard}
  //             onChanged={handleChangeChild}
  //           ></CardEffectActionDrawCard>
  //         )}
  //       </fieldset>
  //     </>
  //   );
  // };

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
    </>
  );
};

export default CardEffectAction;
