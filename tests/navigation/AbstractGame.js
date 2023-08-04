import { elements } from "../config";
import { expect } from "chai";

export default class AbstractGame {
  async openTable(baseUrl, game, tableId) {
    await page.goto(baseUrl + `&game=${game}&table_id=${tableId}`);
    await page.waitForSelector(".loader-frame-container");
  }

  async switchToIframe() {
    await page.waitForSelector("iframe");
    return await (await page.$("iframe")).contentFrame();
  }

  async switchGameView(frame) {
    let currentView = await frame.$eval(elements.view, (el) =>
      el.getAttribute("data-role")
    );
    await frame.waitForTimeout(3000);
    if (currentView == "current-view-classic") {
      await frame.click(elements.videoButton);
    }
  }
  // CHAT
  async sendMessageInChat(frame, message) {
    await frame.waitForSelector(elements.chatButton);
    await frame.click(elements.chatButton);
    await frame.waitForSelector(elements.chatInput);
    await frame.type(elements.chatInput, message);

    await frame.waitForSelector(
      `${elements.chatWrapper} ${elements.sendButton}`
    );
    await frame.click(`${elements.chatWrapper} ${elements.sendButton}`);
    await frame.waitForSelector('span[data-role="chat-message__text"]');
  }
  // TIP
  async giveTip(frame, chip) {
    await frame.click(elements.tippingButton);
    await frame.click(
      `${elements.tipContainer} div[data-role="chip"][data-value="${chip}"]`
    );
    await frame.click(elements.tippingSpot);
    await frame.click(elements.confirmTipButton);
    await frame.click(elements.closeTipFrame);
  }
  // SOUND
  async checkSound(frame, volumeBtn) {
    await frame.waitForSelector(volumeBtn);
    let volume = await frame.$eval(volumeBtn, (el) =>
      el.getAttribute("data-state")
    );
    return volume;
  }

  async changeSound(frame, volumeBtn) {
    await frame.waitForSelector(volumeBtn);
    let initialVolumeState = await frame.$eval(volumeBtn, (el) =>
      el.getAttribute("data-state")
    );
    //    console.log(`INITIAL VOLUME: ${initialVolumeState}`);
    await frame.click(volumeBtn);
    await frame.waitForTimeout(1000);
    let currentVolumeState = await frame.$eval(volumeBtn, (el) =>
      el.getAttribute("data-state")
    );
    // console.log(`CURRENT VOLUME: ${currentVolumeState}`);
    if (initialVolumeState == "on") {
      expect(currentVolumeState).to.include("off");
    } else if (initialVolumeState == "off") {
      expect(currentVolumeState).to.include("on");
    }
  }
}
