export type CardSet = {
  name: string;
  cards: CardDetail[];
};

export type CardDetail = {
  cost: number;
  name: string;
  flavorText: string;
  type: CardType;
  power: number;
  toughness: number;
  isToken: boolean;
  abilities: CardAbility[];
  effects: CardEffectDetail[];
};

export const cardTypes = ["creature", "artifact"] as const;
export type CardType = typeof cardTypes[number];

export const cardAbilities = ["cover", "stealth"] as const;
export type CardAbility = typeof cardAbilities[number];

export type CardEffectDetail = {
  condition: CardEffectCondition;
  actions: CardEffectActionDetail[];
};

export type CardEffectCondition = {
  zonePrettyName: ZoneName;
  when: CardEffectWhen | undefined;
  while: CardEffectWhile | undefined;
  if: CardEffectIf | undefined;
};

export type CardEffectWhen = {
  timing: CardEffectTiming;
};
export type CardEffectTiming = {
  startTurn: CardEffectTimingStartTurnEvent;
};
export type CardEffectTimingStartTurnEvent = {
  source: CardEffectTimingStartTurnEventSource;
};
export const cardEffectTimingStartTurnEventSources = [
  "you",
  "opponent",
  "both",
] as const;
export type CardEffectTimingStartTurnEventSource = typeof cardEffectTimingStartTurnEventSources[number];

export type CardEffectWhile = {
  timing: CardEffectTiming;
  skip: number;
  take: number;
};
export type CardEffectIf = {
  numCondition: NumConditionDetail;
  numValue: number;
};

export type CardEffectActionDetail = {
  damage: CardEffectActionDamageDetail | undefined;
};

export type CardEffectActionDamageDetail = {
  value: number;
  choice: ChoiceDetail;
};

export type ChoiceDetail = {
  how: ChoiceHow;
  numPicks: number;
  playerCondition: PlayerConditionDetail | undefined;
  cardCondition: CardConditionDetail | undefined;
};

export const howList = ["all", "random", "choose"] as const;
export type ChoiceHow = typeof howList[number];

export type PlayerConditionDetail = {
  context: PlayerConditionContext;
  type: PlayerConditionType;
};

export const playerConditionContexts = ["none", "all"] as const;
export type PlayerConditionContext = typeof playerConditionContexts[number];

export const playerConditionTypes = ["none", "all"] as const;
export type PlayerConditionType = typeof playerConditionTypes[number];

export type CardConditionDetail = {
  context: CardConditionContext;
  type: CardConditionType;
  costCondition: NumConditionDetail | undefined;
  nameCondition: TextConditionDetail | undefined;
  typeCondition: CardTypeConditionDetail | undefined;
  powerCondition: NumConditionDetail | undefined;
  toughnessCondition: NumConditionDetail | undefined;
  zoneCondition: ZoneConditionDetail | undefined;
};

export const cardConditionContexts = ["none", "all"] as const;
export type CardConditionContext = typeof cardConditionContexts[number];

export const cardConditionTypes = ["none", "all"] as const;
export type CardConditionType = typeof cardConditionTypes[number];

export type NumConditionDetail = {
  value: number;
  compare: NumCompare;
  not: boolean;
};

export const numCompares = ["=", ">", "<"] as const;
export type NumCompare = typeof numCompares[number];

export type TextConditionDetail = {
  value: string;
  compare: TextCompare;
  not: boolean;
};

export const textCompares = ["=", "like"] as const;
export type TextCompare = typeof textCompares[number];

export type CardTypeConditionDetail = {
  value: CardType[];
  not: boolean;
};

export type ZoneConditionDetail = {
  value: ZoneValueDetail;
  not: boolean;
};

export type ZoneValueDetail = {
  pureValue: ZoneName[];
  choice: ChoiceDetail | undefined;
};

export const zoneNames = ["none", "cardPool"] as const;
export type ZoneName = typeof zoneNames[number];

export const choiceEmpty = (): ChoiceDetail => {
  return {
    how: howList[0],
    numPicks: 0,
    cardCondition: undefined,
    playerCondition: undefined,
  };
};

export const zoneConditionEmpty = (): ZoneConditionDetail => {
  return {
    value: {
      choice: undefined,
      pureValue: [],
    },
    not: false,
  };
};

export const cardTypeConditionEmpty = (): CardTypeConditionDetail => {
  return {
    value: [cardTypes[0]],
    not: false,
  };
};

export const numConditionEmpty = (): NumConditionDetail => {
  return {
    value: 0,
    compare: numCompares[0],
    not: false,
  };
};

export const textConditionEmpty = (): TextConditionDetail => {
  return {
    value: "",
    compare: textCompares[0],
    not: false,
  };
};

export const cardEmpty = (): CardDetail => {
  return {
    cost: 0,
    name: "",
    flavorText: "",
    type: cardTypes[0],
    power: 0,
    toughness: 0,
    isToken: false,
    abilities: [],
    effects: [],
  };
};

export const cardEffectEmpty = (): CardEffectDetail => {
  return {
    condition: {
      zonePrettyName: zoneNames[0],
      when: undefined,
      while: undefined,
      if: undefined,
    },
    actions: [cardEffectActionEmpty()],
  };
};

export const CardEffectWhenEmpty = (): CardEffectWhen => {
  return {
    timing: CardEffectTimingEmpty(),
  };
};

export const CardEffectTimingEmpty = (): CardEffectTiming => {
  return {
    startTurn: CardEffectTimingStartTurnEventEmpty(),
  };
};

export const CardEffectTimingStartTurnEventEmpty = (): CardEffectTimingStartTurnEvent => {
  return {
    source: cardEffectTimingStartTurnEventSources[0],
  };
};

export const CardEffectWhileEmpty = (): CardEffectWhile => {
  return {
    skip: 0,
    take: 0,
    timing: CardEffectTimingEmpty(),
  };
};

export const CardEffectIfEmpty = (): CardEffectIf => {
  return {
    numCondition: numConditionEmpty(),
    numValue: 0,
  };
};

export const cardEffectActionEmpty = (): CardEffectActionDetail => {
  return { damage: undefined };
};

export const CardEffectActionDamageEmpty = (): CardEffectActionDamageDetail => {
  return {
    value: 0,
    choice: choiceEmpty(),
  };
};

export const playerConditionEmpty = (): PlayerConditionDetail => {
  return {
    context: playerConditionContexts[0],
    type: playerConditionTypes[0],
  };
};

export const cardConditionEmpty = (): CardConditionDetail => {
  return {
    context: cardConditionContexts[0],
    type: cardConditionTypes[0],
    costCondition: undefined,
    nameCondition: undefined,
    powerCondition: undefined,
    toughnessCondition: undefined,
    typeCondition: undefined,
    zoneCondition: undefined,
  };
};
