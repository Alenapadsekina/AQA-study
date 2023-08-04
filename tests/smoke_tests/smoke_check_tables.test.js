import LoginPage from "../navigation/LoginPage";
import AbstractGame from "../navigation/AbstractGame";
import { baseUrl, timeout, gameTypes, tableIDs } from "../config";

describe("Check that all tables are working", () => {
  let loginPage;
  let abstractGame;
  let frame;
  beforeAll(async () => {
    jest.setTimeout(timeout);
    loginPage = await new LoginPage();
    abstractGame = await new AbstractGame();
    await loginPage.loginToApp();
    frame = abstractGame.switchToIframe();
  });
  it("Crazy Time table is working", async () => {
    await abstractGame.openTable(
      baseUrl,
      gameTypes.crazyTime,
      tableIDs.crazyTime
    );
  });
  it("American Roulette table is working", async () => {
    await abstractGame.openTable(
      baseUrl,
      gameTypes.americanRoulette,
      tableIDs.americanRoulette
    );
  });
  it("Super Andar Bahar table is working", async () => {
    await abstractGame.openTable(
      baseUrl,
      gameTypes.andarBahar,
      tableIDs.andarBahar
    );
  });
});
