// CREDENTIALS UAT

// export const username = "apadsekina-ARS";
// export const password = "123456";

// CREDENTIALS CIT

export const username = "apadsekina";
export const password = "123456";

// PAGES CIT
export const loginPageUrl =
  "https://cit1-prototype.evolutiongaming.com/frontend/int/login-pages/index.html";
export const homePageUrl =
  "https://cit1-prototype.evolutiongaming.com/frontend/int/landing/";
export const lobbyPageUrl =
  "https://cit1-prototype.evolutiongaming.com/frontend/evo/r0/#category=all_games";
export const baseUrl =
  "https://cit1-prototype.evolutiongaming.com/frontend/evo/r0/index.coop.html#provider=evolution";

// PAGES UAT
// export const loginPageUrl =
//   "https://uat1-prototype.evolutiongaming.com/frontend/int/login-pages/index.html";
// export const homePageUrl =
//   "https://uat1-prototype.evolutiongaming.com/frontend/int/landing/";
// export const lobbyPageUrl =
//   "https://uat1-prototype.evolutiongaming.com/frontend/evo/r1/#category=all_games";
// export const baseUrl =
//   "https://uat1-prototype.evolutiongaming.com/frontend/evo/r1/index.coop.html#provider=evolution";

export const timeout = 7000000;

// TABLE IDs
export const gameTypes = {
  crazyTime: "crazytime",
  americanRoulette: "americanroulette",
  andarBahar: "andarbahar",
  dragonTiger: "dragontiger",
};

// TABLE IDs
export const tableIDs = {
  crazyTime: "CrazyTime0000001",
  americanRoulette: "AmericanTable001",
  andarBahar: "AndarBahar000001",
  dragonTiger: "DragonTiger00001",
};

// ELEMENTS (SELECTORS, BUTTONS AND CONTROLS)
export const elements = {
  // AG buttons
  videoButton: 'button[data-role="video-button"]',
  view: 'div[class="app--2c5f6"]',
  // data-role="current-view-classic"
  chatButton: 'button[data-role="chat-button"]',
  volumeButton: 'button[data-role="volume-button"]',
  tipContainer: 'div[data-role="tipping-container"]',
  tippingButton: 'button[data-role="tipping-button"]',
  tippingSpot: 'div[data-role="tipping-spot-icon-wrapper"]',
  confirmTipButton: 'div[data-role="tipping-confirm-button-wrapper"]',
  closeTipFrame: 'a[data-role="window-tipping_close"]',
  balance: 'span[data-role="balance-label__value"]',
  bet: 'span[data-role="total-bet-label__value"]',
  chatInput: "#chat-public",
  sendButton: 'button[data-role="message-input__button"]',
  chatWrapper: "div[data-role='chat-wrapper']",
  agSlotsVolumeButton: 'button[data-role="customizable-volume-button"]',
  // chips
  //  chip: `div[data-role="chip"][data-value="${x}"]`,
};

export const andarBahar = {
  name: "Andar Bahar",
  gameType: "andarbahar",
  tableId: "AndarBahar000001",
  bettingPanel:
    'div[data-role="footer-perspective-container"][data-is-collapsed="false"]',

  andar: 'g[data-role="betSpot-AB_Andar"]',
  bahar: 'g[data-role="betSpot-AB_Bahar"]',
  cards1to5: '[data-role="betSpot-AB_Cards_1_5"]',

  // cards: (value: string) => `g[data-role="betSpot-AB_Cards_${value}"]`
};

export const dragonTiger = {
  name: "Dragon Tiger",
  gameType: "dragontiger",
  tableId: "DragonTiger00001",
  bettingPanel:
    'div[class="perspectiveContainer--20de4"][data-role="footer-perspective-container"][data-is-collapsed="false"]',
  betOnDragon: "div[data-role='bet-spot-dragon']",
  betOnTiger: "div[data-role='bet-spot-tiger']",
  betOnTie: "div[data-role='bet-spot-tie']",
};
export const crazyTime = {
  name: "Crazy Time",
  gameType: "crazytime",
  tableId: "CrazyTime0000001",
  bettingGrid:
    '[data-role="betting-grid-container"][data-is-betting-time="true"]',
  betOnAll: 'div[data-role="bet-on-all-button"][data-state-active="true"]',
};
export const americanRoulette = {
  name: "American Roulette",
  gameType: "americanroulette",
  tableId: "AmericanTable001",
  bettingGrid:
    'div[class="perspectiveContainer--20de4"][data-role="footer-perspective-container"][data-is-collapsed="false"]',
  bet1to12: 'rect[data-bet-spot-id="1st12"]',
  bet13to24: 'rect[data-bet-spot-id="2nd12"]',
  bet25to36: 'rect[data-bet-spot-id="3rd12"]',
  bet1to18: 'rect[data-bet-spot-id="from1to18"]',
  bet19to36: 'rect[data-bet-spot-id="1st12"]',
  betOdd: 'rect[data-bet-spot-id="odd"]',
  betEven: 'rect[data-bet-spot-id="even"]',
  betAllRed: 'rect[data-bet-spot-id="red"]',
  betAllBlack: 'rect[data-bet-spot-id="black"]',
};

export const cherryBombs = {
  gameType: "bigbangboom",
  tableId: "q2jqyw74z77aaasj",
  spinButton: 'div[data-role="spin-button-rim"]',
  betButton: 'div[class="stake--b9d38"]',
  decreaseBet: 'button[data-role="bet-stake-decrease"]',
  increaseBet: 'button[data-role="bet-stake-increase"]',
  speedUpButton:
    'button[data-role="speed-mode-toggle-button"][data-state="Activated"]',
  speedDownButton:
    'button[data-role="speed-mode-toggle-button"][data-state="Default"]',
  balance: 'div[data-role="balance-label__amount"]',
};
