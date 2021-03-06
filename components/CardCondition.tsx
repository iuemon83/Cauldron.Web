import { useState } from "react";
import CardTypeCondition from "./CardTypeCondition";
import {
  CardConditionDetail,
  cardConditionTypes,
  cardConditionContexts,
  CardTypeConditionDetail,
  ZoneConditionDetail,
  zoneConditionEmpty,
  cardTypeConditionEmpty,
  numConditionEmpty,
  textConditionEmpty,
} from "./CauldronTypes";
import NumCondition from "./NumCondition";
import TextCondition from "./TextCondition";
import ZoneCondition from "./ZoneCondition";

interface Props {
  detail: CardConditionDetail;
  onChanged: (detail: Partial<CardConditionDetail>) => void;
}

const CardCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const [hasCostCondition, setHasCostCondition] = useState(false);
  const [hasNameCondition, setHasNameCondition] = useState(false);
  const [hasPowerCondition, setHasPowerCondition] = useState(false);
  const [hasToughnesstCondition, setHasToughnessCondition] = useState(false);
  const [hasTypeCondition, setHasTypeCondition] = useState(false);
  const [hasZoneCondition, setHasZoneCondition] = useState(false);

  const handleHasCostConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? numConditionEmpty() : undefined;

    onChanged({ costCondition: newValue });

    setHasCostCondition(e.target.checked);
  };

  const handleHasNameConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? textConditionEmpty() : undefined;

    onChanged({ nameCondition: newValue });

    setHasNameCondition(e.target.checked);
  };

  const handleHasPowerConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? numConditionEmpty() : undefined;

    onChanged({ powerCondition: newValue });

    setHasPowerCondition(e.target.checked);
  };

  const handleHasToughnessConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? numConditionEmpty() : undefined;

    onChanged({ toughnessCondition: newValue });

    setHasToughnessCondition(e.target.checked);
  };

  const handleHasTypeConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? cardTypeConditionEmpty() : undefined;

    onChanged({ typeCondition: newValue });

    setHasTypeCondition(e.target.checked);
  };

  const handleHasZoneConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? zoneConditionEmpty() : undefined;

    onChanged({ zoneCondition: newValue });

    setHasZoneCondition(e.target.checked);
  };

  return (
    <>
      <div>
        <label>condition context</label>
        <select
          value={cardConditionContexts.indexOf(detail.context)}
          onChange={(e) =>
            onChanged({
              context: cardConditionContexts[Number(e.target.value)],
            })
          }
        >
          {cardConditionContexts.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>condition type</label>
        <select
          value={cardConditionTypes.indexOf(detail.type)}
          onChange={(e) =>
            onChanged({
              type: cardConditionTypes[Number(e.target.value)],
            })
          }
        >
          {cardConditionTypes.map((e, index) => (
            <option key={index} value={index}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>
          <label>
            <input
              type="checkbox"
              checked={hasCostCondition}
              onChange={handleHasCostConditionChange}
            />
            コストの条件
          </label>
        </h3>
        {detail.costCondition && (
          <NumCondition
            detail={detail.costCondition}
            onChanged={(x) =>
              onChanged({
                costCondition: {
                  ...(detail.costCondition ?? numConditionEmpty()),
                  ...x,
                },
              })
            }
          ></NumCondition>
        )}
      </div>
      <div>
        <h3>
          <label>
            <input
              type="checkbox"
              checked={hasNameCondition}
              onChange={handleHasNameConditionChange}
            />
            名前の条件
          </label>
        </h3>
        {detail.nameCondition && (
          <TextCondition
            detail={detail.nameCondition}
            onChanged={(x) =>
              onChanged({
                nameCondition: {
                  ...(detail.nameCondition ?? textConditionEmpty()),
                  ...x,
                },
              })
            }
          ></TextCondition>
        )}
      </div>
      <div>
        <h3>
          <label>
            <input
              type="checkbox"
              checked={hasPowerCondition}
              onChange={handleHasPowerConditionChange}
            />
            パワーの条件
          </label>
        </h3>
        {detail.powerCondition && (
          <NumCondition
            detail={detail.powerCondition}
            onChanged={(x) =>
              onChanged({
                powerCondition: {
                  ...(detail.powerCondition ?? numConditionEmpty()),
                  ...x,
                },
              })
            }
          ></NumCondition>
        )}
      </div>
      <div>
        <h3>
          <label>
            <input
              type="checkbox"
              checked={hasToughnesstCondition}
              onChange={handleHasToughnessConditionChange}
            />
            タフネスの条件
          </label>
        </h3>
        {detail.toughnessCondition && (
          <NumCondition
            detail={detail.toughnessCondition}
            onChanged={(x) =>
              onChanged({
                toughnessCondition: {
                  ...(detail.toughnessCondition ?? numConditionEmpty()),
                  ...x,
                },
              })
            }
          ></NumCondition>
        )}
      </div>
      <div>
        <h3>
          <label>
            <input
              type="checkbox"
              checked={hasTypeCondition}
              onChange={handleHasTypeConditionChange}
            />
            カードタイプの条件
          </label>
        </h3>
        {detail.typeCondition && (
          <section>
            <CardTypeCondition
              detail={detail.typeCondition}
              onChanged={(x) =>
                onChanged({
                  typeCondition: {
                    ...(detail.typeCondition ?? cardTypeConditionEmpty()),
                    ...x,
                  },
                })
              }
            ></CardTypeCondition>
          </section>
        )}
      </div>
      <div>
        <h3>
          <label>
            <input
              type="checkbox"
              checked={hasZoneCondition}
              onChange={handleHasZoneConditionChange}
            />
            領域の条件
          </label>
        </h3>
        {detail.zoneCondition && (
          <section>
            <ZoneCondition
              detail={detail.zoneCondition}
              onChanged={(x) => {
                onChanged({
                  zoneCondition: {
                    ...(detail.zoneCondition ?? zoneConditionEmpty()),
                    ...x,
                  },
                });
              }}
            ></ZoneCondition>
          </section>
        )}
      </div>
    </>
  );
};

export default CardCondition;
