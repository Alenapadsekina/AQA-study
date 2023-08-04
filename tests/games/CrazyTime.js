import { crazyTime } from "../config";
import Balance from "../navigation/Balance";
const balance = new Balance();

export default class CrazyTime {
  async betOnAll(frame, chip) {
    await frame.waitForSelector(crazyTime.bettingGrid);
    await balance.selectChip(frame, chip);
    await frame.click(crazyTime.betOnAll);
    return chip * 4;
  }
}
