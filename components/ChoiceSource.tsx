import {
  CardConditionDetail,
  cardConditionEmpty,
} from "../types/CardConditionDetail";
import { ChoiceSourceDetail } from "../types/ChoiceSourceDetail";
import {
  PlayerConditionDetail,
  playerConditionEmpty,
} from "../types/PlayerConditionDetail";
import CardCondition from "./CardCondition";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

import PlayerCondition from "./PlayerCondition";

import { Button, FormGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import FormSet from "./input/FormSet";

interface Props {
  detail: ChoiceSourceDetail;
  onChanged: (detail: Partial<ChoiceSourceDetail>) => void;
}

const ChoiceSource: React.FC<Props> = ({ detail, onChanged }) => {
  const howListLabelsByValue = Object.fromEntries(
    globalCache.metadata!.choiceHowList.map((v) => [v.code, v.displayText])
  );
  const howList = Object.keys(howListLabelsByValue);

  const OrPlayerConditionList = () => {
    const clear = () => {
      onChanged({ orPlayerConditions: [] });
    };

    const add = () => {
      const newValue: PlayerConditionDetail = playerConditionEmpty();
      onChanged({
        orPlayerConditions: [...detail.orPlayerConditions, newValue],
      });
    };

    const remove = (index: number) => {
      const newlist = [...detail.orPlayerConditions];
      newlist.splice(index, 1);

      onChanged({
        orPlayerConditions: newlist,
      });
    };

    const onOrPlayerConditionsChanged = (
      x: PlayerConditionDetail,
      index: number
    ) => {
      const newlist = [...detail.orPlayerConditions];
      newlist.splice(index, 1, x);
      onChanged({ orPlayerConditions: newlist });
    };

    return (
      <FormSet
        label={
          <>
            プレイヤーの選択条件
            <Button
              variant="contained"
              onClick={() => add()}
              color="primary"
              startIcon={<AddIcon />}
            />
            <Button
              variant="contained"
              onClick={() => clear()}
              color="secondary"
            >
              Clear
            </Button>
          </>
        }
      >
        {detail.orPlayerConditions.map((e, index) => (
          <FormGroup key={index}>
            <span>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => remove(index)}
                startIcon={<DeleteIcon />}
              />
            </span>
            <PlayerCondition
              detail={e}
              onChanged={(x) =>
                onOrPlayerConditionsChanged({ ...e, ...x }, index)
              }
            ></PlayerCondition>
          </FormGroup>
        ))}
      </FormSet>
    );
  };

  const OrCardConditionList = () => {
    const clear = () => {
      onChanged({ orCardConditions: [] });
    };

    const add = () => {
      const newValue: CardConditionDetail = cardConditionEmpty();
      onChanged({
        orCardConditions: [...detail.orCardConditions, newValue],
      });
    };

    const remove = (index: number) => {
      const newlist = [...detail.orCardConditions];
      newlist.splice(index, 1);

      onChanged({
        orCardConditions: newlist,
      });
    };

    const onOrCardConditionsChanged = (
      x: CardConditionDetail,
      index: number
    ) => {
      const newlist = [...detail.orCardConditions];
      newlist.splice(index, 1, x);
      onChanged({ orCardConditions: newlist });
    };

    return (
      <FormSet
        label={
          <>
            カードの選択条件
            <Button
              variant="contained"
              onClick={() => add()}
              color="primary"
              startIcon={<AddIcon />}
            />
            <Button
              variant="contained"
              onClick={() => clear()}
              color="secondary"
            >
              Clear
            </Button>
          </>
        }
      >
        {detail.orCardConditions.map((e, index) => (
          <FormGroup key={index}>
            <span>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => remove(index)}
                startIcon={<DeleteIcon />}
              />
            </span>
            <CardCondition
              detail={e}
              onChanged={(x) =>
                onOrCardConditionsChanged({ ...e, ...x }, index)
              }
            ></CardCondition>
          </FormGroup>
        ))}
      </FormSet>
    );
  };

  return (
    <>
      <div>
        <InputSelect
          label="選択方式"
          values={howList}
          detail={detail}
          keyName={"how"}
          getLabel={(v) => howListLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber
          label="対象の数"
          keyName="numPicks"
          detail={detail}
          onChanged={onChanged}
        />
      </div>
      <OrPlayerConditionList />
      <OrCardConditionList />
    </>
  );
};

export default ChoiceSource;
