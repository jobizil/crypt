import KeyManager from "../lib/KeyManager.js"
import cryptAPI from "../lib/cryptAPI.js"

const check = {
	async price(cmd) {
		try {
			const keyManager = new KeyManager()
			const key = keyManager.getKey()

			const api = new cryptAPI(key)

			const priceOutput = await api.getPriceData(cmd.coin, cmd.cur)
			console.log(priceOutput)
		} catch (error) {
			console.error(error.message.red)
		}
	},
}
export default check
