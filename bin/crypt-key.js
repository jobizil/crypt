import program from "commander"
import key from "../commands/key.js"

program.command("set").description("Set API Key from https://nomics.com").action(key.set)

program.command("show").description("Shows API Key.").action(key.show)
program.command("remove").description("Removes API Key").action(key.remove)

program.parse(process.argv)
