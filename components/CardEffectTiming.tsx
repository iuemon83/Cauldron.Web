import { useState } from "react";
import { CardEffectTimingDetail } from "../types/CardEffectTimingDetail";
import {
  CardEffectTimingPlayEventDetail,
  CardEffectTimingPlayEventEmpty,
} from "../types/CardEffectTimingPlayEventDetail";
import CardEffectTimingPlayEvent from "./CardEffectTimingPlayEvent";

interface Props {
  detail: CardEffectTimingDetail;
  onChanged: (detail: Partial<CardEffectTimingDetail>) => void;
}

const CardEffectTiming: React.FC<Props> = ({ detail, onChanged }) => {
  const effectActionTypes = ["", "play", "startturn"] as const;

  const [effectActionTypeId, setEffectActionTypeId] = useState(0);

  const handleChangePlayEvent = (
    x: Partial<CardEffectTimingPlayEventDetail>
  ) => {
    onChanged({
      play: {
        ...(detail.play ?? CardEffectTimingPlayEventEmpty()),
        ...x,
      },
    });
  };

  const effectAction = () => {
    // 初期化
    if (detail.play) {
      return (
        <CardEffectTimingPlayEvent
          detail={detail.play}
          onChanged={handleChangePlayEvent}
        ></CardEffectTimingPlayEvent>
      );
    } else {
      return null;
    }
  };

  const handleChangeEffectActionType = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = Number(e.target.value);

    setEffectActionTypeId(id);

    const effectActionType = effectActionTypes[id];

    if (effectActionType === "play") {
      onChanged({ play: CardEffectTimingPlayEventEmpty() });
    }
  };

  return (
    <>
      <div>
        <select
          value={effectActionTypeId}
          onChange={handleChangeEffectActionType}
        >
          {effectActionTypes.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </div>
      {effectAction()}
    </>
  );
};

export default CardEffectTiming;
