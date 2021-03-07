import { cardConditionEmpty } from "../types/CardConditionDetail";
import { ChoiceDetail, howList } from "../types/ChoiceDetail";
import { playerConditionEmpty } from "../types/PlayerConditionDetail";
import CardCondition from "./CardCondition";

import PlayerCondition from "./PlayerCondition";

interface Props {
  detail: ChoiceDetail;
  onChanged: (detail: Partial<ChoiceDetail>) => void;
}

const Choice: React.FC<Props> = ({ detail, onChanged }) => {
  const playerCondition = () => {
    if (!detail.playerCondition) {
      return null;
    }

    return (
      <>
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
      </>
    );
  };

  const cardCondition = () => {
    if (!detail.cardCondition) {
      return null;
    }

    return (
      <>
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
      </>
    );
  };

  const handleHasPlayerConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? playerConditionEmpty() : undefined;

    onChanged({ playerCondition: newValue });
  };

  const handleHasCardConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? cardConditionEmpty() : undefined;

    onChanged({ cardCondition: newValue });
  };

  return (
    <>
      <div>
        <label>
          選択方式:
          <select
            value={howList.indexOf(detail.how)}
            onChange={(e) =>
              onChanged({ how: howList[Number(e.target.value)] })
            }
          >
            {howList.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          対象の数:
          <input
            type="number"
            value={detail.numPicks}
            onChange={(e) => onChanged({ numPicks: Number(e.target.value) })}
          ></input>
        </label>
      </div>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.playerCondition !== undefined}
              onChange={handleHasPlayerConditionChange}
            ></input>
            プレイヤーの選択条件
          </label>
        </legend>
        {playerCondition()}
      </fieldset>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.cardCondition !== undefined}
              onChange={handleHasCardConditionChange}
            ></input>
            カードの選択条件
          </label>
        </legend>
        {cardCondition()}
      </fieldset>
    </>
  );
};

export default Choice;
