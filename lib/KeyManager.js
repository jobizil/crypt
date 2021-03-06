import Configstore from "configstore"
import dotenv from "dotenv"
dotenv.config()
class KeyManager {
	constructor() {
		this.conf = new Configstore(process.env.NAME)
	}

	// Set Api Key on request
	setKey(key) {
		this.conf.set("apiKey", key)
		return key
	}

	// Get current key
	getKey() {
		const key = this.conf.get("apiKey")
		if (!key) {
			throw new Error("No API Key found. Get a key at https://nomics.com".red)
		}
		return key
	}

	removeKey() {
		const key = this.conf.delete("apiKey")
		if (!key) {
			throw new Error("No API Key found.".red)
		}
		return key
	}
}

export default KeyManager
