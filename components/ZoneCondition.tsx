import { ZoneConditionDetail } from "../types/ZoneConditionDetail";
import ZoneValue from "./ZoneValue";

interface Props {
  detail: ZoneConditionDetail;
  onChanged: (detail: Partial<ZoneConditionDetail>) => void;
}

const ZoneCondition: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <label>
          not?:
          <input
            type="checkbox"
            checked={detail.not}
            onChange={(e) => onChanged({ not: e.target.checked })}
          ></input>
        </label>
      </div>
      <ZoneValue
        detail={detail.value}
        onChanged={(x) =>
          onChanged({
            value: { ...detail.value, ...x },
          })
        }
      ></ZoneValue>
    </>
  );
};

export default ZoneCondition;
