"use strict"

import inquirer from "inquirer"
import "colors"
import KeyManager from "../lib/KeyManager.js"
import { isRequired } from "../utils/validation.js"

const key = {
	async set() {
		const keyManager = new KeyManager()
		const input = await inquirer.prompt([
			{
				type: "input",
				name: "key",
				message: "Enter API Key ".green + "https://nomics.com",
				validate: isRequired,
			},
		])

		const key = keyManager.setKey(input.key)
		if (key) {
			console.log("API Key set".green)
		}
	},

	show() {
		try {
			const keyManager = new KeyManager()
			const key = keyManager.getKey()
			console.log("Current API Key:", key.yellow)
			return key
		} catch (error) {
			console.error(error.message)
		}
	},
	remove() {
		try {
			const keyManager = new KeyManager()
			keyManager.removeKey()
			console.log("Key deleted".red)
			return
		} catch (error) {
			console.error(error.message)
		}
	},
}
export default key
