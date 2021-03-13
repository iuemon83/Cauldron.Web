import { CardConditionDetail } from "../types/CardConditionDetail";
import { cardTypeConditionEmpty } from "../types/CardTypeConditionDetail";
import { numConditionEmpty } from "../types/NumConditionDetail";
import { textConditionEmpty } from "../types/TextConditionDetail";
import { zoneConditionEmpty } from "../types/ZoneConditionDetail";
import CardTypeCondition from "./CardTypeCondition";
import { globalCache } from "./CauldronApi";

import NumCondition from "./NumCondition";
import TextCondition from "./TextCondition";
import ZoneCondition from "./ZoneCondition";

interface Props {
  detail: CardConditionDetail;
  onChanged: (detail: Partial<CardConditionDetail>) => void;
}

const CardCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const cardConditionContexts = globalCache.metadata!.cardConditionContexts;

  const handleHasCostConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? numConditionEmpty() : undefined;

    onChanged({ costCondition: newValue });
  };

  const handleHasNameConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? textConditionEmpty() : undefined;

    onChanged({ nameCondition: newValue });
  };

  const handleHasPowerConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? numConditionEmpty() : undefined;

    onChanged({ powerCondition: newValue });
  };

  const handleHasToughnessConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? numConditionEmpty() : undefined;

    onChanged({ toughnessCondition: newValue });
  };

  const handleHasTypeConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? cardTypeConditionEmpty() : undefined;

    onChanged({ typeCondition: newValue });
  };

  const handleChangeHasZoneCondition = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked ? zoneConditionEmpty() : undefined;

    onChanged({ zoneCondition: newValue });
  };

  return (
    <>
      <div>
        <label>condition context:</label>
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
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.costCondition !== undefined}
              onChange={handleHasCostConditionChange}
            />
            コストの条件
          </label>
        </legend>
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
      </fieldset>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.nameCondition !== undefined}
              onChange={handleHasNameConditionChange}
            />
            名前の条件
          </label>
        </legend>
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
      </fieldset>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.powerCondition !== undefined}
              onChange={handleHasPowerConditionChange}
            />
            パワーの条件
          </label>
        </legend>
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
      </fieldset>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.toughnessCondition !== undefined}
              onChange={handleHasToughnessConditionChange}
            />
            タフネスの条件
          </label>
        </legend>
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
      </fieldset>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.typeCondition !== undefined}
              onChange={handleHasTypeConditionChange}
            />
            カードタイプの条件
          </label>
        </legend>
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
      </fieldset>
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.zoneCondition !== undefined}
              onChange={handleChangeHasZoneCondition}
            />
            領域の条件
          </label>
        </legend>
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
      </fieldset>
    </>
  );
};

export default CardCondition;
