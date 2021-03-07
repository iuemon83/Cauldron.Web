import { cardConditionEmpty } from "../types/CardConditionDetail";
import {
  CardEffectTimingDamageBeforeEventDetail,
  eventSources,
} from "../types/CardEffectTimingDamageBeforeEventDetail";
import { playerConditionEmpty } from "../types/PlayerConditionDetail";
import CardCondition from "./CardCondition";
import PlayerCondition from "./PlayerCondition";

interface Props {
  detail: CardEffectTimingDamageBeforeEventDetail;
  onChanged: (
    newValue: Partial<CardEffectTimingDamageBeforeEventDetail>
  ) => void;
}

const CardEffectTimingDamageBefore: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  const sourceInput = () => {
    const handleChangeEventSource = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const id = Number(e.target.value);

      onChanged({ source: eventSources[id] });
    };

    return (
      <label>
        source:
        <select
          value={eventSources.indexOf(detail.source)}
          onChange={handleChangeEventSource}
        >
          {eventSources.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </label>
    );
  };

  const playerConditionInput = () => {
    const handleChangeHas = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked ? playerConditionEmpty() : undefined;

      onChanged({ playerCondition: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.playerCondition !== undefined}
                onChange={handleChangeHas}
              ></input>
              プレイヤーの選択条件
            </label>
          </legend>
          {detail.playerCondition && (
            <PlayerCondition
              detail={detail.playerCondition}
              onChanged={(x) =>
                onChanged({
                  playerCondition: {
                    ...(detail.playerCondition ?? playerConditionEmpty()),
                    ...x,
                  },
                })
              }
            ></PlayerCondition>
          )}
        </fieldset>
      </>
    );
  };

  const cardConditionInput = () => {
    const handleChangeHas = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked ? cardConditionEmpty() : undefined;

      onChanged({ cardCondition: newValue });
    };

    return (
      <>
        <fieldset>
          <legend>
            <label>
              <input
                type="checkbox"
                checked={detail.cardCondition !== undefined}
                onChange={handleChangeHas}
              ></input>
              カードの選択条件
            </label>
          </legend>
          {detail.cardCondition && (
            <CardCondition
              detail={detail.cardCondition}
              onChanged={(x) =>
                onChanged({
                  cardCondition: {
                    ...(detail.cardCondition ?? cardConditionEmpty()),
                    ...x,
                  },
                })
              }
            ></CardCondition>
          )}
        </fieldset>
      </>
    );
  };

  return (
    <>
      <div>{sourceInput()}</div>
      <div>{playerConditionInput()}</div>
      <div>{cardConditionInput()}</div>
    </>
  );
};

export default CardEffectTimingDamageBefore;
