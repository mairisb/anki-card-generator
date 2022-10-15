import appRootPath from "app-root-path";
import axios from "axios";
import fs from "fs";
import path from "path";
import godsJson from "./assets/gods.json";
import { getGodImgFileName } from "./getGodImgFileName";
import { IGod } from "./interfaces/IGod";

let counter = 1;
let gods = [...godsJson] as IGod[];

gods.forEach(async (god) => {
  const filePath = path.resolve(
    appRootPath.path,
    `src/assets/gods-img/${getGodImgFileName(god.name)}.jpg`
  );

  const writer = fs.createWriteStream(filePath);

  const godCardResponse = await axios({
    url: god.card,
    method: "GET",
    responseType: "stream",
  });

  godCardResponse.data.pipe(writer);

  writer.on("finish", () => {
    console.log(counter++, god.name);
  });

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
});
