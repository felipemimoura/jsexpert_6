// 1) Criação do servidor com nodeJS
import { createServer } from "http";
// 2 ) Importação da rota
import { handler } from "./routes.js";

// 3) criação do servidor
export default createServer(handler);
