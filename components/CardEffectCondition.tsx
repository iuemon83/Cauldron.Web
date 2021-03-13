import { CardEffectConditionDetail } from "../types/CardEffectConditionDetail";
import { CardEffectWhenEmpty } from "../types/CardEffectWhenDetail";
import CardEffectWhen from "./CardEffectWhen";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectConditionDetail;
  onChanged: (newValue: Partial<CardEffectConditionDetail>) => void;
}

const CardEffectCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const zoneNames = globalCache.metadata!.zoneNames;

  return (
    <>
      <InputSelect
        label="領域"
        values={zoneNames}
        value={detail.zonePrettyName}
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
    </>
  );
};

export default CardEffectCondition;
