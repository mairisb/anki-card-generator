import { IMenuItem } from "./IMenuItem";

export interface IItemDescription {
  Description: string;
  Menuitems: IMenuItem[];
  SecondaryDescription?: string;
}
