import { numValueModifierEmpty } from "../types/NumValueModifierDetail";
import { PlayerModifierDetail } from "../types/PlayerModifierDetail";
import NumValueModifier from "./NumValueModifier";

interface Props {
  detail: PlayerModifierDetail;
  onChanged: (detail: Partial<PlayerModifierDetail>) => void;
}

const PlayerModifier: React.FC<Props> = ({ detail, onChanged }) => {
  const maxHp = () => {
    const handleChangeHas = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanged({
        maxHp: e.target.checked ? numValueModifierEmpty() : undefined,
      });
    };

    return (
      <fieldset>
        <legend>
          <label>
            <input
              type="checkbox"
              checked={detail.maxHp !== undefined}
              onChange={handleChangeHas}
            ></input>
            Max HP
          </label>
        </legend>
        {detail.maxHp && (
          <NumValueModifier
            detail={detail.maxHp}
            onChanged={(x) => {
              if (detail.maxHp) {
                onChanged({ maxHp: { ...detail.maxHp, ...x } });
              }
            }}
          ></NumValueModifier>
        )}
      </fieldset>
    );
  };

  return <>{maxHp()}</>;
};
export default PlayerModifier;
