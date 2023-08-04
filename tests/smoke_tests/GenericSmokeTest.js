import LoginPage from "../navigation/LoginPage";
import Balance from "../navigation/Balance";
import AbstractGame from "../navigation/AbstractGame";
import { baseUrl, timeout, andarBahar, elements } from "../config";
let loginPage = new LoginPage();
let abstractGame = new AbstractGame();
let balance = new Balance();

export default class GenericSmokeTest {
  async setPrecondition(testedGame) {
    jest.setTimeout(timeout);
    await loginPage.loginToApp();
    await abstractGame.openTable(
      baseUrl,
      testedGame.gameType,
      testedGame.tableId
    );
  }

  testAbstractGameSmoke(testedGame) {
    describe(`Smoke: ${testedGame.name}`, () => {
      let initialBalance;
      let frame;
      beforeAll(async () => {
        this.setPrecondition(testedGame);
        frame = await abstractGame.switchToIframe();
        await frame.waitForTimeout(3000);
        await abstractGame.switchGameView(frame);
      });

      it("Should change sound", async () => {
        await abstractGame.changeSound(frame, elements.volumeButton, "on");
      });
      it("Should send message in chat", async () => {
        await abstractGame.sendMessageInChat(
          frame,
          `${testedGame.name} is the best`
        );
      });
      it("Should give tip", async () => {
        await abstractGame.giveTip(frame, 5);
      });
    });
  }

  testBalanceSmoke(testedGame, betType, placeBet, params) {
    describe(`Place a bet: ${testedGame.name}`, () => {
      let initialBalance;
      let expectedBet;
      let frame;
      beforeAll(async () => {
        this.setPrecondition(testedGame);
        frame = await abstractGame.switchToIframe();
        await frame.waitForTimeout(3000);
        await abstractGame.switchGameView(frame);
      });
      it("should check balance", async () => {
        initialBalance = await balance.assignInitialBalance(frame);
      });
      it(`Should place a bet: ${betType}`, async () => {
        await abstractGame.switchGameView(frame);
        expectedBet = await placeBet(frame, ...params);
        await frame.waitForTimeout(2000);
      });

      it("Should check bet amount", async () => {
        await balance.checkBetAmount(frame, expectedBet);
      });
      it("Should deduct bet from balance", async () => {
        await balance.checkBalanceDeduction(frame, initialBalance);
      });
    });
  }
}
