import { numValueModifierEmpty } from "../types/NumValueModifierDetail";
import { PlayerModifierDetail } from "../types/PlayerModifierDetail";
import InputOption from "./input/InputOption";
import NumValueModifier from "./NumValueModifier";

interface Props {
  detail: PlayerModifierDetail;
  onChanged: (detail: Partial<PlayerModifierDetail>) => void;
}

const PlayerModifier: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputOption
        label="Max HP"
        detail={detail}
        keyName="maxHp"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <NumValueModifier detail={d!} onChanged={h}></NumValueModifier>
        )}
      />
    </>
  );
};
export default PlayerModifier;
