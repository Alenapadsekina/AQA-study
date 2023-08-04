import { americanRoulette } from "../config";
import Balance from "../navigation/Balance";
const balance = new Balance();

export default class AmericanRoulette {
  async placeBet(frame, chip, bet) {
    await frame.waitForSelector(americanRoulette.bettingGrid);
    await balance.selectChip(frame, chip);
    await frame.click(`rect[data-bet-spot-id="${bet}"]`);
    await frame.waitForTimeout(1000);
    return chip * 1;
  }
}
