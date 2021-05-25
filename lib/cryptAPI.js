import axios from "axios"
import "colors"

class cryptAPI {
	constructor(apiKey) {
		this.apiKey = apiKey
		this.baseUrl = "https://api.nomics.com/v1/currencies/ticker"
	}
	async getPriceData(coinOpt, curOpt) {
		try {
			// Currency Formatter
			const formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: curOpt,
			})
			const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOpt}&convert=${curOpt}`)

			let output = ""

			res.data.forEach((coin) => {
				output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).blue} | Rank: ${
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
		throw new Error("Invalid API key, go to https://nomics.com")
	} else if (error.response.status === 404) {
		throw new Error("Your API key is not responding")
	} else {
		throw new Error("Something went wrong")
	}
}
export default cryptAPI
