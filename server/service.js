import fs from "fs";
import { extname, join } from "path";
import config from "./config.js";
import fsPromise from "fs/promises";
const { dir } = config;
export class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename);
  }

  async getFileInfo(file) {
    const fullFilePath = join(dir.publicDrectory, file);
    await fsPromise.access(fullFilePath);
    console.log(fullFilePath);

    const fileType = extname(fullFilePath);
    return {
      name: fullFilePath,
      type: fileType,
    };
  }

  async getFileStream(file) {
    const { name, type } = await this.getFileInfo(file);
    return {
      stream: this.createFileStream(name),
      type,
    };
  }
}
