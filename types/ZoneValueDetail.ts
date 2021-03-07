import { ChoiceDetail } from "./ChoiceDetail";

export type ZoneValueDetail = {
  pureValue: ZoneName[];
  choice: ChoiceDetail | undefined;
};

export const zoneNames = [
  "none",
  "cardPool",
  "youField",
  "opponentField",
] as const;
export type ZoneName = typeof zoneNames[number];
