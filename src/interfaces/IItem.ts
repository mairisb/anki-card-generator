import { ItemTypeEnum } from "../enums/ItemTypeEnum";
import { PolarStringFlagEnum } from "../enums/PolarStringFlagEnum";
import { IItemDescription } from "./IItemDescription";

export interface IItem {
  ActiveFlag: PolarStringFlagEnum;
  ChildItemId: number;
  DeviceName: string;
  Glyph: PolarStringFlagEnum;
  IconId: number;
  ItemDescription: IItemDescription;
  ItemId: number;
  ItemTier: 1 | 2 | 3 | 4; // WIP
  Price: number;
  RestrictedRoles: string; // WIP
  RootItemId: number;
  ShortDesc: string;
  StartingItem: boolean;
  Type: ItemTypeEnum;
  itemIcon_URL: string;
}
