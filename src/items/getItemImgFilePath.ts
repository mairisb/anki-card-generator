import appRootPath from "app-root-path";
import path from "path";
import { IGod } from "../interfaces/IGod";
import { IItem } from "../interfaces/IItem";

export const getItemImgFilePath = (item: IItem) =>
  path.resolve(
    appRootPath.path,
    "src",
    "assets",
    "items-img",
    getItemImgFileName(item)
  );

export const getItemImgFileName = (item: IItem) =>
  `${item.DeviceName.replaceAll(" ", "")
    .replaceAll("'", "")
    .replaceAll("-", "")}.jpg`;
