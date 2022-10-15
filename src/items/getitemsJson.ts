import appRootPath from "app-root-path";
import axios from "axios";
import fs from "fs";
import path from "path";
import { url } from "../constants/url";

export const getItems = async () => {
  const items = await axios.get(url.items);
  const filePath = path.resolve(
    appRootPath.path,
    "src",
    "assets",
    "items.json"
  );
  const itemsJson = JSON.stringify(items.data, undefined, "  ");
  fs.writeFileSync(filePath, itemsJson);
};

getItems();
