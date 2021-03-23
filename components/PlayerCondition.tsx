import { deflate } from "node:zlib";
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
      <div>
        <InputSelect
          label="condition context"
          values={playerConditionContexts}
          detail={detail}
          keyName={"context"}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputSelect
          label="condition type"
          values={playerConditionTypes}
          detail={detail}
          keyName={"type"}
          onChanged={onChanged}
        />
      </div>
    </>
  );
};

export default PlayerCondition;
