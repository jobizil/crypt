import { builtinModules } from "node:module"

const isRequired = (input) => (input === "" ? "This value is required" : true)
export { isRequired }
