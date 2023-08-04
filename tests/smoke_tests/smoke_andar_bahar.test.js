import AndarBahar from "../games/AndarBahar";
import GenericSmokeTest from "./GenericSmokeTest";
import { andarBahar } from "../config";

let ab = new AndarBahar();
let smoke = new GenericSmokeTest();
let params2bets = [25, "andar", "1_5"];
let params1bet = [25, "andar"];

smoke.testAbstractGameSmoke(andarBahar);
smoke.testBalanceSmoke(
  andarBahar,
  "two bets",
  ab.placeTwoBets.bind(ab),
  params2bets
);
// smoke.testBalanceSmoke(
//   andarBahar,
//   "one bet",
//   ab.placeOneBet.bind(ab),
//   params1bet
// );
