import { CardEffectWhileDetail } from "../types/CardEffectWhileDetail";
import CardEffectTiming from "./CardEffectTiming";
import InputNumber from "./input/InputNumber";

interface Props {
  detail: CardEffectWhileDetail;
  onChanged: (newValue: Partial<CardEffectWhileDetail>) => void;
}

const CardEffectWhile: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <CardEffectTiming
        detail={detail.timing}
        onChanged={(x) => onChanged({ timing: { ...detail.timing, ...x } })}
      ></CardEffectTiming>
      <InputNumber
        label="skip"
        keyName="skip"
        detail={detail}
        onChanged={onChanged}
      />
      <InputNumber
        label="take"
        keyName="take"
        detail={detail}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectWhile;
