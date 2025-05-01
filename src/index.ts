import { start } from "./server";
import { increaseVersion } from "./version";

const version = increaseVersion()

const server = start();

server.publish("reload", version.toString());