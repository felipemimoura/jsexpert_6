import server from "./server.js";
//2 import loggert
import { logger } from "./utils.js";
// 3 import o arquivo de config
import config from "./config.js";

//1) instancia o servidor

server
  .listen(config.port)
  .on("listening", () => logger.info(`server running at ${config.port}`));
