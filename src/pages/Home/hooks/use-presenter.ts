import { Quote } from "@/models/quote.model";
import { getQuoteService } from "@/services/quote.service";
import { useEffect, useState } from "react";

const usePresenter = () => {
  const [quotes, setQuote] = useState<Quote[]>([])

  const getQuote = async () => {
    try {
      const response = await getQuoteService()
      setQuote(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  return {
    quotes
  }
}

export default usePresenter;