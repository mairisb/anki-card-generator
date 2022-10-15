import AnkiExport from "anki-apkg-export";
import appRootPath from "app-root-path";
import fs from "fs";
import path from "path";
import { ItemTypeEnum } from "../enums/ItemTypeEnum";
import { PolarStringFlagEnum } from "../enums/PolarStringFlagEnum";
import { getItemImgFileName, getItemImgFilePath } from "./getItemImgFilePath";
import { ItemsService } from "./ItemsService";

const consumables = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Consumable
);

const relics0 = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 1
);
const relics1 = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 2
);
const relics2 = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 3
);
const relics3 = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 4
);

const items1 = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Item && item.ItemTier === 1
);
const items2 = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Item && item.ItemTier === 2
);
const items3 = ItemsService.getItems().filter(
  (item) => item.Type === ItemTypeEnum.Item && item.ItemTier === 3
);
const itemsEvolved = ItemsService.getItems().filter(
  (item) =>
    item.Type === ItemTypeEnum.Item &&
    item.ItemTier === 4 &&
    item.Glyph === PolarStringFlagEnum.NO
);
const itemsGlyphs = ItemsService.getItems().filter(
  (item) =>
    item.Type === ItemTypeEnum.Item &&
    item.ItemTier === 4 &&
    item.Glyph === PolarStringFlagEnum.YES
);

const items = itemsGlyphs;
const NAME = "smite-items-items-glyphs";

console.log("Creating new apkg");
const apkg = new AnkiExport(NAME);
console.log("apkg created");

items.forEach((item) => {
  apkg.addMedia(
    getItemImgFileName(item),
    fs.readFileSync(getItemImgFilePath(item))
  );
  apkg.addCard(`<img src="${getItemImgFileName(item)}" />`, item.DeviceName);
  console.log(`added card: ${item.DeviceName}`);
});

console.log("generating apkg");

apkg
  .save()
  .then((zip) => {
    fs.writeFileSync(
      path.resolve(appRootPath.path, "src", "assets", "apkg", `${NAME}.apkg`),
      zip,
      "binary"
    );
    console.log(`Package has been generated: ${NAME}.apkg`);
  })
  .catch((err) => console.log(err.stack || err));
