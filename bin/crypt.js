#!/usr/bin/env node

import program from "commander"
import dotenv from "dotenv"
dotenv.config()

program
	.version("1.0")
	.command("key", "Manage API Key -- https://nomics.com")
	.command("check", "Check current coin price.")

	.parse(process.argv)
