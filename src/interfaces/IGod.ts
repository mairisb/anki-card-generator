import { BooleanStringFlagEnum } from "../enums/BooleanStringFlagEnum";
import { GodRoleEnum } from "../enums/GodRoleEnum";
import { GodTypeEnum } from "../enums/GodTypeEnum";
import { PantheonEnum } from "../enums/PantheonEnum";
import { PolarStringFlagEnum } from "../enums/PolarStringFlagEnum";

export interface IGod {
  id: number;
  name: string;
  title: string;
  free: BooleanStringFlagEnum;
  new: PolarStringFlagEnum;
  pantheon: PantheonEnum;
  pros: string;
  type: GodTypeEnum;
  role: GodRoleEnum;
  card: string;
}
