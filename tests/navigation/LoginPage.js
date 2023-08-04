import BasePage from "./BasePage";
import { loginPageUrl, username, password } from "../config.js";

export default class LoginPage extends BasePage {
  async visit() {
    await page.goto(loginPageUrl);
  }
  async isLoginFormDisplayed() {
    await page.waitForSelector("#loginForm");
  }
  async login() {
    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);
    await page.click("._1aVGF_6cUMNc1lylJiamxS");
    await page.waitForSelector("._33-xvDiljCppL2IescFWB");
  }
  async loginToApp() {
    await this.visit();
    await this.isLoginFormDisplayed();
    await this.login();
  }
}
