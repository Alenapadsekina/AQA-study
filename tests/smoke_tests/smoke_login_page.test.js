import BasePage from "../navigation/BasePage";
import LoginPage from "../navigation/LoginPage";
import HomePage from "../navigation/HomePage";
import LobbyPage from "../navigation/LobbyPage";
import timeout from "../config";

describe("e2e", () => {
  let basePage;
  let loginPage;
  let homePage;
  let lobbyPage;
  beforeAll(async () => {
    jest.setTimeout(timeout);
    basePage = new BasePage();
    loginPage = new LoginPage();
    homePage = new HomePage();
    lobbyPage = new LobbyPage();
  });
  it("Should open login page", async () => {
    await loginPage.visit();
    await loginPage.isLoginFormDisplayed();
  });
  //   it("Should login with valid credentials", async () => {
  //     await loginPage.login();
  //     await homePage.isHomePageDisplayed();
  //   });
  //   it("Should open lobby", async () => {
  //     await lobbyPage.visit();
  //   });
});
