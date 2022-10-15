import { BooleanStringFlagEnum } from "src/enums/BooleanStringFlagEnum";
import { GodRoleEnum } from "src/enums/GodRoleEnum";
import { GodTypeEnum } from "src/enums/GodTypeEnum";
import { PantheonEnum } from "src/enums/PantheonEnum";
import { PolarStringFlagEnum } from "src/enums/PolarStringFlagEnum";

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
