import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { api } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    const res = await api.get("/quotes");
    console.log("Getting Quote", res.data);
    appState.quote = new Quote(res.data);
    console.log("Quote", appState.quote);
  }
}

export const quotesService = new QuotesService();
