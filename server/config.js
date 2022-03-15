//1) pegar o endereço da pasta tual
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const currentDir = dirname(fileURLToPath(import.meta.url));
// 2) pegar a root
const root = join(currentDir, "../");
// 3 pegar os arquivos estáticos
const audioDirectory = join(root, "audio");
const publicDrectory = join(root, "public");

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    publicDrectory,
    audioDirectory,
    songsDirectory: join(audioDirectory, "songs"),
    fxDirectory: join(audioDirectory, "fx"),
  },
  pages: {
    homeHTML: "home/index.html",
    controllerHTML: "controller/index.html",
  },
  location: {
    home: "home",
  },
  constants: {
    CONTENT_TYPE: {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    },
  },
};
