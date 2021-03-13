import { PlayerConditionDetail } from "../types/PlayerConditionDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: PlayerConditionDetail;
  onChanged: (detail: Partial<PlayerConditionDetail>) => void;
}

const PlayerCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const playerConditionContexts = globalCache.metadata!.playerConditionContexts;

  const playerConditionTypes = globalCache.metadata!.playerConditionTypes;

  return (
    <>
      <InputSelect
        label="condition context"
        values={playerConditionContexts}
        value={detail.context}
        onChanged={onChanged}
      />
      <InputSelect
        label="condition type"
        values={playerConditionTypes}
        value={detail.type}
        onChanged={onChanged}
      />
    </>
  );
};

export default PlayerCondition;
