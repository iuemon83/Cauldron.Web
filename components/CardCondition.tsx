import { CardConditionDetail } from "../types/CardConditionDetail";
import { cardTypeConditionEmpty } from "../types/CardTypeConditionDetail";
import { numConditionEmpty } from "../types/NumConditionDetail";
import { textConditionEmpty } from "../types/TextConditionDetail";
import { zoneConditionEmpty } from "../types/ZoneConditionDetail";
import CardTypeCondition from "./CardTypeCondition";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

import NumCondition from "./NumCondition";
import TextCondition from "./TextCondition";
import ZoneCondition from "./ZoneCondition";

interface Props {
  detail: CardConditionDetail;
  onChanged: (detail: Partial<CardConditionDetail>) => void;
}

const CardCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const cardConditionContextsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.cardConditionContexts.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const cardConditionContexts = Object.keys(cardConditionContextsLabelsByValue);

  return (
    <>
      <InputSelect
        label="context"
        values={cardConditionContexts}
        detail={detail}
        keyName={"context"}
        getLabel={(v) => cardConditionContextsLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="コストの条件"
        detail={detail}
        keyName="costCondition"
        empty={numConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCondition detail={d!} onChanged={h}></NumCondition>}
      />
      <InputOption
        label="名前の条件"
        detail={detail}
        keyName="nameCondition"
        empty={textConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <TextCondition detail={d!} onChanged={h}></TextCondition>
        )}
      />
      <InputOption
        label="パワーの条件"
        detail={detail}
        keyName="powerCondition"
        empty={numConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCondition detail={d!} onChanged={h}></NumCondition>}
      />
      <InputOption
        label="タフネスの条件"
        detail={detail}
        keyName="toughnessCondition"
        empty={numConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCondition detail={d!} onChanged={h}></NumCondition>}
      />
      <InputOption
        label="カードタイプの条件"
        detail={detail}
        keyName="typeCondition"
        empty={cardTypeConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardTypeCondition detail={d!} onChanged={h}></CardTypeCondition>
        )}
      />
      <InputOption
        label="領域の条件"
        detail={detail}
        keyName="zoneCondition"
        empty={zoneConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <ZoneCondition detail={d!} onChanged={h}></ZoneCondition>
        )}
      />
    </>
  );
};

export default CardCondition;
