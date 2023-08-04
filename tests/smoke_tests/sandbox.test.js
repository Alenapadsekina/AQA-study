import AndarBahar from "../games/AndarBahar";
import DragonTiger from "../games/DragonTiger";
// import AmericanRoulette from "../games/AmericanRoulette";
// import AbstractGame from "../navigation/AbstractGame";
import GenericSmokeTest from "./GenericSmokeTest";
import { andarBahar, dragonTiger, americanRoulette } from "../config";

let ab = new AndarBahar();
let dt = new DragonTiger();
let smoke = new GenericSmokeTest();

let params1 = ["dragon", 25];
let params2 = ["tie", 25];
let params2bets = ["andar", "1_5", 25];
// smoke.testAbstractGameSmoke(andarBahar);
// smoke.testBalanceSmoke(
//   andarBahar,
//   "two bets",
//   ab.placeTwoBets.bind(ab),
//   params2bets
// );
// smoke.testBalanceSmoke(
//   andarBahar,
//   "one bet",
//   ab.placeOneBet.bind(ab),
//   params1bet
// );
// smoke.testAbstractGameSmoke(dragonTiger);
smoke.testBalanceSmoke(dragonTiger, "dragon", dt.placeBet.bind(dt), params1);
// smoke.testBalanceSmoke(dragonTiger, "tie", placeBetFunction, params2);
