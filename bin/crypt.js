#!/usr/bin/env node

import program from "commander"
// import pkg from "../package.json"

program
	.version("1.0.0")
	.command("key", "Manage API Key -- https://nomics.com")
	.command("check", "Check current coin price.")

	.parse(process.argv)
