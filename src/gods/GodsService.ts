import godsJson from "./assets/gods.json";
import { IGod } from "./interfaces/IGod";

export class GodsService {
  static getGods() {
    return JSON.parse(JSON.stringify(godsJson)) as IGod[];
  }
}
