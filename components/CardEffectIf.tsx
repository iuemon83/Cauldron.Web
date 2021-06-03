import { CardEffectIfDetail } from "../types/CardEffectIfDetail";
import FormSet from "./input/FormSet";
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
      <FormSet label="比較値">
        <NumValue
          detail={detail.numValue}
          onChanged={(x) =>
            onChanged({ numValue: { ...detail.numValue, ...x } })
          }
        ></NumValue>
      </FormSet>
    </>
  );
};

export default CardEffectIf;
