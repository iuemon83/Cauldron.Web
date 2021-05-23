import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
} from "@material-ui/core";
import { cardConditionEmpty } from "../types/CardConditionDetail";
import { ChoiceDetail } from "../types/ChoiceDetail";
import { globalCache } from "./CauldronApi";
import ChoiceSource from "./ChoiceSource";
import InputNumber from "./input/InputNumber";
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
      <div>
        <InputSelect
          label="選択方式"
          values={howList}
          detail={detail}
          keyName={"how"}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber
          label="対象の数"
          keyName="numPicks"
          detail={detail}
          onChanged={onChanged}
        />
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">選択候補</FormLabel>
          <ChoiceSource
            detail={detail.source}
            onChanged={(e) => onChanged({ source: { ...detail.source, ...e } })}
          />
        </FormControl>
      </div>
    </>
  );
};

export default Choice;
