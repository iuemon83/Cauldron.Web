import { globalCache } from "./CauldronApi";
import { CardSetConditionDetail } from "../types/CardSetConditionDetail";
import InputSelect from "./input/InputSelect";
import InputOption from "./input/InputOption";
import { textConditionEmpty } from "../types/TextConditionDetail";
import TextCondition from "./TextCondition";

interface Props {
  detail: CardSetConditionDetail;
  onChanged: (detail: Partial<CardSetConditionDetail>) => void;
}

const CardSetCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const cardSetConditionTypeLabelsByValue = Object.fromEntries(
    globalCache.metadata!.cardSetConditionTypes.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const cardSetConditionTypes = Object.keys(cardSetConditionTypeLabelsByValue);

  return (
    <>
      カードセット:
      <InputSelect
        label="タイプ"
        values={cardSetConditionTypes}
        detail={detail}
        keyName={"type"}
        getLabel={(v) => cardSetConditionTypeLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="カードセット名"
        detail={detail}
        keyName="valueCondition"
        empty={textConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <TextCondition detail={d!} onChanged={h}></TextCondition>
        )}
      />
    </>
  );
};

export default CardSetCondition;
