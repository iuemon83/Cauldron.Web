// import { CardAbility, CardType } from "./CardDetail";
// import * as CardEffectTimingDamageBefore from "./CardEffectTimingDamageBeforeEventDetail";
// import * as CardEffectTimingDamageAfter from "./CardEffectTimingDamageAfterEventDetail";
// import * as CardEffectTimingDestroy from "./CardEffectTimingDestroyEventDetail";
// import * as CardEffectTimingEndTurn from "./CardEffectTimingEndTurnEventDetail";
// import * as CardEffectTimingMoveCard from "./CardEffectTimingMoveCardEventDetail";
// import * as CardEffectTimingPlay from "./CardEffectTimingPlayEventDetail";
// import * as CardEffectTimingModifyPlayer from "./CardEffectTimingModifyPlayerEventDetail";
// import * as CardEffectTimingStartTurn from "./CardEffectTimingStartTurnEventDetail";
// import { ChoiceHow } from "./ChoiceDetail";
// import { NumCompare } from "./NumConditionDetail";
// import * as NumValueCalculator from "./NumValueCalculatorDetail";
// import { Operator } from "./NumValueModifierDetail";
// import { TextCompare } from "./TextConditionDetail";
// import * as TextValueCalculator from "./TextValueCalculatorDetail";
// import { ZoneName } from "./ZoneValueDetail";
// import { CardConditionContext } from "./CardConditionDetail";
// import {
//   PlayerConditionContext,
//   PlayerConditionType,
// } from "./PlayerConditionDetail";

type CardMetadataElm = {
  code: string;
  displayText: string;
};

export type CardType = CardMetadataElm;
export type CardAbility = CardMetadataElm;
export type CardEffectTimingDamageBeforeDamageType = CardMetadataElm;
export type CardEffectTimingDamageBeforeEventSource = CardMetadataElm;
export type CardEffectTimingDamageAfterDamageType = CardMetadataElm;
export type CardEffectTimingDamageAfterEventSource = CardMetadataElm;
export type CardEffectTimingDestroyEventSource = CardMetadataElm;
export type CardEffectTimingEndTurnEventSource = CardMetadataElm;
export type CardEffectTimingMoveCardEventSource = CardMetadataElm;
export type CardEffectTimingPlayEventSource = CardMetadataElm;
export type CardEffectTimingModifyPlayerEventSource = CardMetadataElm;
export type CardEffectTimingStartTurnEventSource = CardMetadataElm;
export type ChoiceHow = CardMetadataElm;
export type NumCompare = CardMetadataElm;
export type NumValueCalculatorValueType = CardMetadataElm;
export type Operator = CardMetadataElm;
export type TextCompare = CardMetadataElm;
export type TextValueCalculatorValueType = CardMetadataElm;
export type ZoneName = CardMetadataElm;
export type CardConditionContext = CardMetadataElm;
export type PlayerConditionContext = CardMetadataElm;
export type PlayerConditionType = CardMetadataElm;

export type CardMetaData = {
  cardTypes: CardType[];
  cardAbilities: CardAbility[];
  effectTimingDamageAfterDamageTypes: CardEffectTimingDamageAfterDamageType[];
  effectTimingDamageAfterEventSources: CardEffectTimingDamageAfterEventSource[];
  effectTimingDamageBeforeDamageTypes: CardEffectTimingDamageBeforeDamageType[];
  effectTimingDamageBeforeEventSources: CardEffectTimingDamageBeforeEventSource[];
  effectTimingDestroyEventSources: CardEffectTimingDestroyEventSource[];
  effectTimingEndTurnEventSources: CardEffectTimingEndTurnEventSource[];
  effectTimingModifyPlayerEventSources: CardEffectTimingModifyPlayerEventSource[];
  effectTimingMoveCardEventSources: CardEffectTimingMoveCardEventSource[];
  effectTimingPlayEventSources: CardEffectTimingPlayEventSource[];
  effectTimingStartTurnEventSources: CardEffectTimingStartTurnEventSource[];
  choiceHowList: ChoiceHow[];
  numConditionCompares: NumCompare[];
  numValueCalculatorValueTypes: NumValueCalculatorValueType[];
  numValueModifierOperators: Operator[];
  textConditionCompares: TextCompare[];
  textValueCalculatorValueTypes: TextValueCalculatorValueType[];
  zoneNames: ZoneName[];
  cardConditionContexts: CardConditionContext[];
  playerConditionContexts: PlayerConditionContext[];
  playerConditionTypes: PlayerConditionType[];
};
