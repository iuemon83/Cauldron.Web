import {
  CardEffectTimingDamageBeforeEventDetail,
  CardEffectTimingDamageBeforeEventEmpty,
} from "../types/CardEffectTimingDamageBeforeEventDetail";
import {
  CardEffectTimingDestroyEventDetail,
  CardEffectTimingDestroyEventEmpty,
} from "../types/CardEffectTimingDestroyEventDetail";
import { CardEffectTimingDetail } from "../types/CardEffectTimingDetail";
import {
  CardEffectTimingEndTurnEventDetail,
  CardEffectTimingEndTurnEventEmpty,
} from "../types/CardEffectTimingEndTurnEventDetail";
import {
  CardEffectTimingMoveCardEventDetail,
  CardEffectTimingMoveCardEventEmpty,
} from "../types/CardEffectTimingMoveCardEventDetail";
import {
  CardEffectTimingPlayEventDetail,
  CardEffectTimingPlayEventEmpty,
} from "../types/CardEffectTimingPlayEventDetail";
import {
  CardEffectTimingStartTurnEventDetail,
  CardEffectTimingStartTurnEventEmpty,
} from "../types/CardEffectTimingStartTurnEventDetail";
import CardEffectTimingDamageBefore from "./CardEffectTimingDamageBefore";
import CardEffectTimingDestroy from "./CardEffectTimingDestroy";
import CardEffectTimingEndTurn from "./CardEffectTimingEndTurn";
import CardEffectTimingMoveCard from "./CardEffectTimingMoveCard";
import CardEffectTimingPlay from "./CardEffectTimingPlay";
import CardEffectTimingStartTurn from "./CardEffectTimingStartTurn";

interface Props {
  detail: CardEffectTimingDetail;
  onChanged: (detail: Partial<CardEffectTimingDetail>) => void;
}

const CardEffectTiming: React.FC<Props> = ({ detail, onChanged }) => {
  const playEventInput = () => {
    const handleChangeChild = (x: Partial<CardEffectTimingPlayEventDetail>) => {
      onChanged({
        play: {
          ...(detail.play ?? CardEffectTimingPlayEventEmpty()),
          ...x,
        },
      });
    };

    const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked
        ? CardEffectTimingPlayEventEmpty()
        : undefined;

      onChanged({ play: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.play !== undefined}
                onChange={handleHasChange}
              ></input>
              カードのプレイ時
            </label>
          </legend>
          {detail.play && (
            <CardEffectTimingPlay
              detail={detail.play}
              onChanged={handleChangeChild}
            ></CardEffectTimingPlay>
          )}
        </fieldset>
      </>
    );
  };

  const startTurnEventInput = () => {
    const handleChangeChild = (
      x: Partial<CardEffectTimingStartTurnEventDetail>
    ) => {
      onChanged({
        startTurn: {
          ...(detail.startTurn ?? CardEffectTimingStartTurnEventEmpty()),
          ...x,
        },
      });
    };

    const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked
        ? CardEffectTimingStartTurnEventEmpty()
        : undefined;

      onChanged({ startTurn: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.startTurn !== undefined}
                onChange={handleHasChange}
              ></input>
              ターン開始時
            </label>
          </legend>
          {detail.startTurn && (
            <CardEffectTimingStartTurn
              detail={detail.startTurn}
              onChanged={handleChangeChild}
            ></CardEffectTimingStartTurn>
          )}
        </fieldset>
      </>
    );
  };

  const endTurnEventInput = () => {
    const handleChangeChild = (
      x: Partial<CardEffectTimingEndTurnEventDetail>
    ) => {
      onChanged({
        endTurn: {
          ...(detail.endTurn ?? CardEffectTimingEndTurnEventEmpty()),
          ...x,
        },
      });
    };

    const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked
        ? CardEffectTimingEndTurnEventEmpty()
        : undefined;

      onChanged({ endTurn: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.endTurn !== undefined}
                onChange={handleHasChange}
              ></input>
              ターン終了時
            </label>
          </legend>
          {detail.endTurn && (
            <CardEffectTimingEndTurn
              detail={detail.endTurn}
              onChanged={handleChangeChild}
            ></CardEffectTimingEndTurn>
          )}
        </fieldset>
      </>
    );
  };

  const destroyEventInput = () => {
    const handleChangeChild = (
      x: Partial<CardEffectTimingDestroyEventDetail>
    ) => {
      onChanged({
        destroy: {
          ...(detail.destroy ?? CardEffectTimingDestroyEventEmpty()),
          ...x,
        },
      });
    };

    const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked
        ? CardEffectTimingDestroyEventEmpty()
        : undefined;

      onChanged({ destroy: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.destroy !== undefined}
                onChange={handleHasChange}
              ></input>
              カードの破壊時
            </label>
          </legend>
          {detail.destroy && (
            <CardEffectTimingDestroy
              detail={detail.destroy}
              onChanged={handleChangeChild}
            ></CardEffectTimingDestroy>
          )}
        </fieldset>
      </>
    );
  };

  const damageBeforeEventInput = () => {
    const handleChangeChild = (
      x: Partial<CardEffectTimingDamageBeforeEventDetail>
    ) => {
      onChanged({
        damageBefore: {
          ...(detail.damageBefore ?? CardEffectTimingDamageBeforeEventEmpty()),
          ...x,
        },
      });
    };

    const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked
        ? CardEffectTimingDamageBeforeEventEmpty()
        : undefined;

      onChanged({ damageBefore: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.damageBefore !== undefined}
                onChange={handleHasChange}
              ></input>
              ダメージ前
            </label>
          </legend>
          {detail.damageBefore && (
            <CardEffectTimingDamageBefore
              detail={detail.damageBefore}
              onChanged={handleChangeChild}
            ></CardEffectTimingDamageBefore>
          )}
        </fieldset>
      </>
    );
  };

  const moveCardEventInput = () => {
    const handleChangeChild = (
      x: Partial<CardEffectTimingMoveCardEventDetail>
    ) => {
      onChanged({
        moveCard: {
          ...(detail.moveCard ?? CardEffectTimingMoveCardEventEmpty()),
          ...x,
        },
      });
    };

    const handleHasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked
        ? CardEffectTimingMoveCardEventEmpty()
        : undefined;

      onChanged({ moveCard: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.moveCard !== undefined}
                onChange={handleHasChange}
              ></input>
              カードの移動時
            </label>
          </legend>
          {detail.moveCard && (
            <CardEffectTimingMoveCard
              detail={detail.moveCard}
              onChanged={handleChangeChild}
            ></CardEffectTimingMoveCard>
          )}
        </fieldset>
      </>
    );
  };

  return (
    <>
      <div>{startTurnEventInput()}</div>
      <div>{endTurnEventInput()}</div>
      <div>{playEventInput()}</div>
      <div>{moveCardEventInput()}</div>
      <div>{destroyEventInput()}</div>
      <div>{damageBeforeEventInput()}</div>
    </>
  );
};

export default CardEffectTiming;
