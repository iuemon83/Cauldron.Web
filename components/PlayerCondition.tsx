import {
  PlayerConditionDetail,
  playerConditionContexts,
  playerConditionTypes,
} from "./CauldronTypes";

interface Props {
  detail: PlayerConditionDetail;
  onChanged: (detail: Partial<PlayerConditionDetail>) => void;
}

const PlayerCondition: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <label>
          condition context:
          <select
            value={playerConditionContexts.indexOf(detail.context)}
            onChange={(e) =>
              onChanged({
                context: playerConditionContexts[Number(e.target.value)],
              })
            }
          >
            {playerConditionContexts.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          condition type:
          <select
            value={playerConditionTypes.indexOf(detail.type)}
            onChange={(e) =>
              onChanged({
                type: playerConditionTypes[Number(e.target.value)],
              })
            }
          >
            {playerConditionTypes.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default PlayerCondition;
