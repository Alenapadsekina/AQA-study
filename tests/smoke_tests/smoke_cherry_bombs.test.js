import LoginPage from "../navigation/LoginPage";
import AbstractGame from "../navigation/AbstractGame";
import AGslots from "../games/AGslots";
import { baseUrl, timeout, elements, cherryBombs } from "../config";

describe("Cherry Bombs smoke test", () => {
  let loginPage = new LoginPage();
  let abstractGame = new AbstractGame();
  let agSlots = new AGslots();
  let initialBalance;
  let frame;
  beforeAll(async () => {
    jest.setTimeout(timeout);
    await loginPage.loginToApp();
    await page.goto(
      "https://cit1-prototype.evolutiongaming.com/frontend/evo/r0/#category=roulette&game=bigbangboom&table_id=q2jqyw74z77aaasj&vt_id=q6pndtdt5prqaai2&lobby_launch_id=aea91fbc95c84bbc9f54f4a3e9cf47de"
    );
    await page.waitForSelector("iframe");
    frame = await (await page.$("iframe")).contentFrame();
  });

  // it("Should change sound", async () => {
  //   await agSlots.changeSound(frame);
  // });
  // it("Should change bet", async () => {
  //   await agSlots.selectBet(frame, 1);
  // });
  it("Should spin", async () => {
    await agSlots.changeSpeed(frame);
    await agSlots.spin(frame);
  });
});
