import { ItemTypeEnum } from "./enums/ItemTypeEnum";
import { PolarStringFlagEnum } from "./enums/PolarStringFlagEnum";
import { IItem } from "./interfaces/IItem";
import { ItemsService } from "./items/ItemsService";

const output = (items: IItem[]) => {
  items.forEach((item) => {
    console.log(item.DeviceName);
  });
  console.log(items.length);
};

const items = ItemsService.getItems();

const consumables = items.filter(
  (item) => item.Type === ItemTypeEnum.Consumable
);

const relics0 = items.filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 1
);
const relics1 = items.filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 2
);
const relics2 = items.filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 3
);
const relics3 = items.filter(
  (item) => item.Type === ItemTypeEnum.Active && item.ItemTier === 4
);

const items1 = items.filter(
  (item) => item.Type === ItemTypeEnum.Item && item.ItemTier === 1
);
const items2 = items.filter(
  (item) => item.Type === ItemTypeEnum.Item && item.ItemTier === 2
);
const items3 = items.filter(
  (item) => item.Type === ItemTypeEnum.Item && item.ItemTier === 3
);
const itemsEvolved = items.filter(
  (item) =>
    item.Type === ItemTypeEnum.Item &&
    item.ItemTier === 4 &&
    item.Glyph === PolarStringFlagEnum.NO
);
const itemsGlyphs = items.filter(
  (item) =>
    item.Type === ItemTypeEnum.Item &&
    item.ItemTier === 4 &&
    item.Glyph === PolarStringFlagEnum.YES
);

relics1.forEach((element) => {
  console.log(element.ChildItemId);
});
