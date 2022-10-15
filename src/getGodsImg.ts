import axios from "axios";
import fs from "fs";
import { getGodImgFilePath } from "./getGodImgFileName";
import { GodsService } from "./GodsService";

let counter = 1;
let gods = GodsService.getGods();

gods.forEach(async (god) => {
  const filePath = getGodImgFilePath(god);
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
