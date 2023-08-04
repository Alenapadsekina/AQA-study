import AmericanRoulette from "../games/AmericanRoulette";
import GenericSmokeTest from "./GenericSmokeTest";
import { americanRoulette } from "../config";

let ar = new AmericanRoulette();
let smoke = new GenericSmokeTest();
let params1bet = [5, "1st12"];

smoke.testAbstractGameSmoke(americanRoulette);
smoke.testBalanceSmoke(
  americanRoulette,
  "bet 1 to 12",
  ar.placeBet.bind(ar),
  params1bet
);
