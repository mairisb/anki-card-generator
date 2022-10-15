import appRootPath from "app-root-path";
import path from "path";
import { IGod } from "../interfaces/IGod";

export const getGodImgFilePath = (god: IGod) =>
  path.resolve(
    appRootPath.path,
    "src",
    "assets",
    "gods-img",
    getGodImgFileName(god)
  );

export const getGodImgFileName = (god: IGod) =>
  `${god.name.replaceAll(" ", "").replaceAll("'", "")}.jpg`;
