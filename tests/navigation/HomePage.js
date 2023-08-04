import BasePage from "./BasePage";
import homePageUrl from "../config";

export default class HomePage extends BasePage {
  async visit() {
    await console.log(homePageUrl);
    await page.goto(homePageUrl);

    await page.waitForSelector("._1BxPwbjPdAMzcf_YqLoFj3");
  }
  async isHomePageDisplayed() {
    await page.waitForSelector("._1BxPwbjPdAMzcf_YqLoFj3");
  }
}
