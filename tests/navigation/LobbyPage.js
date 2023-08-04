import BasePage from "./BasePage";
import lobbyPageUrl from "../config.js";

export default class LobbyPage extends BasePage {
  async visit() {
    await console.log(lobbyPageUrl);
    // await page.goto(lobbyPage);
    // await page.waitForSelector(".ScrollableList--0a7ac");
  }
}
