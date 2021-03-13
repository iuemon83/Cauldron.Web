import axios from "axios";
import { CardMetaData } from "../types/CardMetaData";

export async function getCardMetaData(): Promise<CardMetaData> {
  const url = "https://localhost:44330/CardMetaData";

  const response = await axios.get(url);
  return response.data;
}

export const globalCache: { metadata: CardMetaData | null } = {
  metadata: null,
};
