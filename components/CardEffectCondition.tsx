import { CardEffectConditionDetail } from "../types/CardEffectConditionDetail";
import { CardEffectIfEmpty } from "../types/CardEffectIfDetail";
import { CardEffectWhenEmpty } from "../types/CardEffectWhenDetail";
import { CardEffectWhileEmpty } from "../types/CardEffectWhileDetail";
import CardEffectIf from "./CardEffectIf";
import CardEffectWhen from "./CardEffectWhen";
import CardEffectWhile from "./CardEffectWhile";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectConditionDetail;
  onChanged: (newValue: Partial<CardEffectConditionDetail>) => void;
}

const CardEffectCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const zoneNamesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText])
  );
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  return (
    <>
      <InputSelect
        label="領域"
        values={zoneNames}
        detail={detail}
        keyName={"zonePrettyName"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="いつ"
        detail={detail}
        keyName="when"
        empty={CardEffectWhenEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectWhen detail={d!} onChanged={h}></CardEffectWhen>
        )}
      />
      <InputOption
        label="期間"
        detail={detail}
        keyName="while"
        empty={CardEffectWhileEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectWhile detail={d!} onChanged={h}></CardEffectWhile>
        )}
      />
      <InputOption
        label="もし"
        detail={detail}
        keyName="if"
        empty={CardEffectIfEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectIf detail={d!} onChanged={h}></CardEffectIf>}
      />
    </>
  );
};

export default CardEffectCondition;
