export default class AGslots {
  async clickSpin() {}
  async changeSound(frame) {
    await frame.waitForSelector(
      'button[data-role="customizable-volume-button"]'
    );
    await frame.click('button[data-role="customizable-volume-button"]');
    await frame.waitForTimeout(3000);
  }
  async selectBet(frame, bet) {
    await frame.waitForSelector('button[data-role="bet-stake-middle"]');
    await frame.click('button[data-role="bet-stake-middle"]');
    await frame.click(`div[data-role="selector-item-€${bet}"]`);
    await frame.waitForTimeout(3000);
  }
  async spin(frame) {
    await frame.waitForSelector('div[data-role="spin-button"]');
    await frame.click('div[data-role="spin-button"]');
    await frame.waitForTimeout(3000);
  }
  async changeSpeed(frame) {
    await frame.waitForSelector('button[data-role="speed-mode-toggle-button"]');
    let currentSpeed = await frame.$eval(
      'button[data-role="speed-mode-toggle-button"]',
      (el) => el.getAttribute("data-state")
    );
    console.log(currentSpeed);
    if (currentSpeed == "Default") {
      await frame.click('button[data-role="speed-mode-toggle-button"]');
    }
  }
}
