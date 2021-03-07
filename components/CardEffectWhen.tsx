import { CardEffectWhenDetail } from "../types/CardEffectWhenDetail";
import CardEffectTiming from "./CardEffectTiming";

interface Props {
  detail: CardEffectWhenDetail;
  onChanged: (newValue: Partial<CardEffectWhenDetail>) => void;
}

const CardEffectWhen: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <CardEffectTiming
        detail={detail.timing}
        onChanged={(x) => onChanged({ timing: { ...detail.timing, ...x } })}
      ></CardEffectTiming>
    </>
  );
};

export default CardEffectWhen;
