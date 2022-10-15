import itemsJson from "../assets/items.json";
import { PolarStringFlagEnum } from "../enums/PolarStringFlagEnum";
import { IItem } from "../interfaces/IItem";

export class ItemsService {
  static getItems() {
    const items = JSON.parse(JSON.stringify(itemsJson)) as IItem[];
    const activeItems = items.filter(
      (item) => item.ActiveFlag === PolarStringFlagEnum.YES
    );
    return activeItems;
  }
}
