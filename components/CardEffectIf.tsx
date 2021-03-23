import { CardEffectIfDetail } from "../types/CardEffectIfDetail";
import NumCondition from "./NumCondition";
import NumValue from "./NumValue";

interface Props {
  detail: CardEffectIfDetail;
  onChanged: (newValue: Partial<CardEffectIfDetail>) => void;
}

const CardEffectIf: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <NumCondition
        detail={detail.numCondition}
        onChanged={(x) =>
          onChanged({ numCondition: { ...detail.numCondition, ...x } })
        }
      ></NumCondition>
      <fieldset>
        <legend>比較値</legend>
        <NumValue
          detail={detail.numValue}
          onChanged={(x) =>
            onChanged({ numValue: { ...detail.numValue, ...x } })
          }
        ></NumValue>
      </fieldset>
    </>
  );
};

export default CardEffectIf;
