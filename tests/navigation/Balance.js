import { elements } from "../config";
import { expect } from "chai";

export default class Balance {
  // BETTING
  async selectChip(frame, chip) {
    await frame.click(`div[data-role="chip"][data-value="${chip}"]`);
  }

  async getBetAmount(frame) {
    await frame.waitForSelector(elements.bet);
    await frame.waitForTimeout(2000);
    let bet = await frame.$(elements.bet);
    let betAmount = await frame.evaluate((el) => el.textContent, bet);
    console.log(`BET AMOUNT IS : ${betAmount}`);
    return betAmount;
  }

  async checkBetAmount(frame, amount) {
    let betAmount = await this.getBetAmount(frame);
    expect(Number(betAmount.replace(",", ""))).to.equal(amount);
  }

  // BALANCE
  async assignInitialBalance(frame) {
    await frame.waitForSelector(elements.balance);
    let balance = await frame.$(elements.balance);
    let balanceValue = await frame.evaluate((el) => el.textContent, balance);
    // console.log(Number(balanceValue.replace(",", "")));
    console.log(`BALANCE: ${balanceValue}`);
    return Number(balanceValue.replace(",", ""));
  }

  async getBalanceAmount(frame) {
    let balance = await frame.$(elements.balance);
    let balanceValue = await frame.evaluate((el) => el.textContent, balance);
    return balanceValue;
  }

  async checkBalanceDeduction(frame, initialBalance) {
    let betAmount = await this.getBetAmount(frame);
    let currentBalance = await this.getBalanceAmount(frame);
    expect(
      Math.fround(initialBalance) -
        Math.fround(Number(betAmount.replace(",", "")))
    ).to.equal(Math.fround(Number(currentBalance.replace(",", ""))));
  }
}
