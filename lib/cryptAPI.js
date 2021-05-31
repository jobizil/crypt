import axios from 'axios'
import 'colors'

class cryptAPI {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker'
  }
  async getPriceData(coinOpt, curOpt) {
    try {
      // Currency Formatter
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOpt,
      })

      // Market Cap Formatter
      function convertMarketCap(marketCap) {
        return Math.abs(Number(marketCap)) >= 1.0e12
          ? (Math.abs(Number(marketCap)) / 1.0e12).toFixed(2) + 'T'
          : Math.abs(Number(marketCap)) >= 1.0e9
          ? (Math.abs(Number(marketCap)) / 1.0e9).toFixed(2) + 'B'
          : Math.abs(Number(marketCap)) >= 1.0e6
          ? (Math.abs(Number(marketCap)) / 1.0e6).toFixed(2) + 'M'
          : Math.abs(Number(marketCap)) >= 1.0e3
          ? (Math.abs(Number(marketCap)) / 1.0e3).toFixed(2) + 'K'
          : Math.abs(Number(marketCap))
      }

      // Fetch API with input
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOpt}&convert=${curOpt}`
      )

      let output = ''

      res.data.forEach(coin => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${
          formatter.format(coin.price).blue
        } | Market Cap: ${convertMarketCap(coin.market_cap)} | Rank: ${
          coin.rank.green
        }\n`
      })
      return output
    } catch (error) {
      handleError(error)
    }
  }
}

function handleError(error) {
  if (error.response.staus === 401) {
    throw new Error('Invalid API key, go to https://nomics.com')
  } else if (error.response.status === 404) {
    throw new Error('Your API key is not responding')
  } else {
    throw new Error('Something went wrong')
  }
}
export default cryptAPI
