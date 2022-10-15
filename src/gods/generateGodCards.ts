import AnkiExport from "anki-apkg-export";
import appRootPath from "app-root-path";
import fs from "fs";
import path from "path";
import { getGodImgFileName, getGodImgFilePath } from "./getGodImgFileName";
import { GodsService } from "./GodsService";

const gods = GodsService.getGods();

console.log("Creating new apkg");
const apkg = new AnkiExport("smite-gods");
console.log("apkg created");

gods.forEach((god) => {
  apkg.addMedia(
    getGodImgFileName(god),
    fs.readFileSync(getGodImgFilePath(god))
  );
  apkg.addCard(`<img src="${getGodImgFileName(god)}" />`, god.name);
  console.log(`added card: god.name`);
});

console.log("generating apkg");

apkg
  .save()
  .then((zip) => {
    fs.writeFileSync(
      path.resolve(
        appRootPath.path,
        "src",
        "assets",
        "apkg",
        "smite-gods.apkg"
      ),
      zip,
      "binary"
    );
    console.log(`Package has been generated: smite-gods.apkg`);
  })
  .catch((err) => console.log(err.stack || err));
