import { CardAbility, CardType } from "./CardDetail";
import * as CardEffectTimingDamageBefore from "./CardEffectTimingDamageBeforeEventDetail";
import * as CardEffectTimingDamageAfter from "./CardEffectTimingDamageAfterEventDetail";
import * as CardEffectTimingDestroy from "./CardEffectTimingDestroyEventDetail";
import * as CardEffectTimingEndTurn from "./CardEffectTimingEndTurnEventDetail";
import * as CardEffectTimingMoveCard from "./CardEffectTimingMoveCardEventDetail";
import * as CardEffectTimingPlay from "./CardEffectTimingPlayEventDetail";
import * as CardEffectTimingModifyPlayer from "./CardEffectTimingModifyPlayerEventDetail";
import * as CardEffectTimingStartTurn from "./CardEffectTimingStartTurnEventDetail";
import { ChoiceHow } from "./ChoiceDetail";
import { NumCompare } from "./NumConditionDetail";
import * as NumValueCalculator from "./NumValueCalculatorDetail";
import { Operator } from "./NumValueModifierDetail";
import { TextCompare } from "./TextConditionDetail";
import * as TextValueCalculator from "./TextValueCalculatorDetail";
import { ZoneName } from "./ZoneValueDetail";
import { CardConditionContext } from "./CardConditionDetail";
import {
  PlayerConditionContext,
  PlayerConditionType,
} from "./PlayerConditionDetail";

export type CardMetaData = {
  cardTypes: CardType[];
  cardAbilities: CardAbility[];
  effectTimingDamageAfterDamageTypes: CardEffectTimingDamageAfter.DamageType[];
  effectTimingDamageAfterEventSources: CardEffectTimingDamageAfter.EventSource[];
  effectTimingDamageBeforeDamageTypes: CardEffectTimingDamageBefore.DamageType[];
  effectTimingDamageBeforeEventSources: CardEffectTimingDamageBefore.EventSource[];
  effectTimingDestroyEventSources: CardEffectTimingDestroy.EventSource[];
  effectTimingEndTurnEventSources: CardEffectTimingEndTurn.EventSource[];
  effectTimingModifyPlayerEventSources: CardEffectTimingModifyPlayer.EventSource[];
  effectTimingMoveCardEventSources: CardEffectTimingMoveCard.EventSource[];
  effectTimingPlayEventSources: CardEffectTimingPlay.EventSource[];
  effectTimingStartTurnEventSources: CardEffectTimingStartTurn.EventSource[];
  choiceHowList: ChoiceHow[];
  numConditionCompares: NumCompare[];
  numValueCalculatorValueTypes: NumValueCalculator.ValueType[];
  numValueModifierOperators: Operator[];
  textConditionCompares: TextCompare[];
  textValueCalculatorValueTypes: TextValueCalculator.ValueType[];
  zoneNames: ZoneName[];
  cardConditionContexts: CardConditionContext[];
  playerConditionContexts: PlayerConditionContext[];
  playerConditionTypes: PlayerConditionType[];
};
