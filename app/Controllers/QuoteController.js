import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuote() {
  let quote = appState.quote;
  let template = `
  <div>
    <p>${quote.content} <br> ${quote.author}</p>
  </div>
  <div>
   <p><i class="mdi mdi-magnify"></i>Test</p>
  </div>
  `;
  setHTML("quote", template);
}
export class QuoteController {
  constructor() {
    appState.on("quote", _drawQuote);
    this.getQuote();
  }

  async getQuote() {
    try {
      await quotesService.getQuote();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
