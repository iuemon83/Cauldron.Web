import { ChoiceDetail } from "../types/ChoiceDetail";
import { globalCache } from "./CauldronApi";
import ChoiceSource from "./ChoiceSource";
import FormSet from "./input/FormSet";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: ChoiceDetail;
  onChanged: (detail: Partial<ChoiceDetail>) => void;
}

const Choice: React.FC<Props> = ({ detail, onChanged }) => {
  const howListLabelsByValue = Object.fromEntries(
    globalCache.metadata!.choiceHowList.map((v) => [v.code, v.displayText])
  );
  const howList = Object.keys(howListLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="選択方式"
          values={howList}
          detail={detail}
          keyName={"how"}
          getLabel={(v) => howListLabelsByValue[v]}
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
        <FormSet label="選択候補">
          <ChoiceSource
            detail={detail.source}
            onChanged={(e) => onChanged({ source: { ...detail.source, ...e } })}
          />
        </FormSet>
      </div>
    </>
  );
};

export default Choice;
