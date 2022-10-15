import { BooleanStringFlagEnum } from "src/enums/BooleanStringFlagEnum";
import { GodRoleEnum } from "src/enums/GodRoleEnum";
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
  type: string;
  role: GodRoleEnum;
  card: string;
}
