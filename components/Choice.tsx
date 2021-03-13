import { cardConditionEmpty } from "../types/CardConditionDetail";
import { ChoiceDetail } from "../types/ChoiceDetail";
import { playerConditionEmpty } from "../types/PlayerConditionDetail";
import CardCondition from "./CardCondition";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

import PlayerCondition from "./PlayerCondition";

interface Props {
  detail: ChoiceDetail;
  onChanged: (detail: Partial<ChoiceDetail>) => void;
}

const Choice: React.FC<Props> = ({ detail, onChanged }) => {
  const howList = globalCache.metadata!.choiceHowList;

  return (
    <>
      <InputSelect
        label="選択方式"
        values={howList}
        value={detail.how}
        onChanged={onChanged}
      />
      <InputNumber
        label="対象の数"
        keyName="numPicks"
        detail={detail}
        onChanged={onChanged}
      />
      <InputOption
        label="プレイヤーの選択条件"
        detail={detail}
        keyName="playerCondition"
        empty={playerConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <PlayerCondition detail={d!} onChanged={h}></PlayerCondition>
        )}
      />
      <InputOption
        label="カードの選択条件"
        detail={detail}
        keyName="cardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardCondition detail={d!} onChanged={h}></CardCondition>
        )}
      />
    </>
  );
};

export default Choice;
