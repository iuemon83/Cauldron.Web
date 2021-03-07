import React, { useState } from "react";
import { CardEffectConditionDetail } from "../types/CardEffectConditionDetail";
import { CardEffectWhenEmpty } from "../types/CardEffectWhenDetail";
import { zoneNames } from "../types/ZoneValueDetail";
import CardEffectWhen from "./CardEffectWhen";

interface Props {
  detail: CardEffectConditionDetail;
  onChanged: (newValue: Partial<CardEffectConditionDetail>) => void;
}

const CardEffectCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const handleChangeEffectWhen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked ? CardEffectWhenEmpty() : undefined;

    onChanged({ when: newValue });
  };

  const when = () => {
    if (!detail.when) {
      return null;
    }

    return (
      <>
        <CardEffectWhen
          detail={detail.when}
          onChanged={(x) =>
            onChanged({
              when: {
                ...(detail.when ?? CardEffectWhenEmpty()),
                ...x,
              },
            })
          }
        ></CardEffectWhen>
      </>
    );
  };

  return (
    <>
      <div>
        <label>
          領域:
          <select
            value={zoneNames.indexOf(detail.zonePrettyName)}
            onChange={(e) =>
              onChanged({ zonePrettyName: zoneNames[Number(e.target.value)] })
            }
          >
            {zoneNames.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.when !== undefined}
              onChange={handleChangeEffectWhen}
            ></input>
            いつ
          </label>
        </legend>
        {when()}
      </fieldset>
    </>
  );
};

export default CardEffectCondition;
