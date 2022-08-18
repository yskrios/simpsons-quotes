import { Quote } from "../models/quote.model"
import { instanceAxios } from "./config"

export const getQuoteService = async (): Promise<Quote[]> => {
  // const { data } = await instanceAxios.get<Quote[]>("/quotes")
  const { data } = await instanceAxios.get<Quote[]>("http://localhost:9001/quote")
  return data
}
