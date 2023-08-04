import { andarBahar } from "../config";
import Balance from "../navigation/Balance";
const balance = new Balance();

export default class AndarBahar {
  async selectMainBet(frame, bet) {
    let x = bet[0].toUpperCase() + bet.substring(1).toLowerCase();
    await frame.click(`g[data-role="betSpot-AB_${x}"]`);
  }

  async selectSideBet(frame, bet) {
    await frame.click(`[data-role="betSpot-AB_Cards_${bet}"]`);
  }

  async placeOneBet(frame, chip, mainBet) {
    await frame.waitForSelector(andarBahar.bettingPanel);
    await balance.selectChip(frame, chip);
    await this.selectMainBet(frame, mainBet);
    await frame.waitForTimeout(1000);
    return chip * 1;
  }

  async placeTwoBets(frame, chip, mainBet, sideBet) {
    await frame.waitForSelector(andarBahar.bettingPanel);
    await balance.selectChip(frame, chip);
    await this.selectMainBet(frame, mainBet);
    await this.selectSideBet(frame, sideBet);
    await frame.waitForTimeout(1000);
    return chip * 2;
  }
}
