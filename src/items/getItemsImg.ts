import axios from "axios";
import fs from "fs";
import { getItemImgFilePath } from "./getItemImgFilePath";
import { ItemsService } from "./ItemsService";

let counter = 1;
let items = ItemsService.getItems().splice(0, 50); // you need to get them by 50, because all at once will timout

items.forEach(async (item) => {
  const filePath = getItemImgFilePath(item);
  const writer = fs.createWriteStream(filePath);
  const itemCardResponse = await axios({
    url: item.itemIcon_URL,
    method: "GET",
    responseType: "stream",
    timeout: 60000,
  });
  if (!itemCardResponse || !itemCardResponse.data) {
    return;
  }
  itemCardResponse.data.pipe(writer);
  writer.on("finish", () => {
    console.log(counter++, item.DeviceName);
  });
});

console.log("DONE");
