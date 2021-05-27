import { PlayerConditionDetail } from "../types/PlayerConditionDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: PlayerConditionDetail;
  onChanged: (detail: Partial<PlayerConditionDetail>) => void;
}

const PlayerCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const playerConditionContextsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.playerConditionContexts.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const playerConditionContexts = Object.keys(
    playerConditionContextsLabelsByValue
  );

  const playerConditionTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.playerConditionTypes.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const playerConditionTypes = Object.keys(playerConditionTypesLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="context"
          values={playerConditionContexts}
          detail={detail}
          keyName={"context"}
          getLabel={(v) => playerConditionContextsLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputSelect
          label="type"
          values={playerConditionTypes}
          detail={detail}
          keyName={"type"}
          getLabel={(v) => playerConditionTypesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
    </>
  );
};

export default PlayerCondition;
