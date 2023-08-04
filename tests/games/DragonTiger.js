import { dragonTiger } from "../config";
import Balance from "../navigation/Balance";
const balance = new Balance();

export default class DragonTiger {
  async placeBet(frame, chip, bet) {
    await frame.waitForSelector(dragonTiger.bettingPanel);
    await balance.selectChip(frame, chip);
    await frame.click(`div[data-role='bet-spot-${bet}']`);
    return chip * 1;
  }
}
