import DragonTiger from "../games/DragonTiger";
import GenericSmokeTest from "./GenericSmokeTest";
import { dragonTiger } from "../config";

let dt = new DragonTiger();
let smoke = new GenericSmokeTest();

let params1 = [25, "dragon"];
let params2 = [25, "tie"];

smoke.testAbstractGameSmoke(dragonTiger);
smoke.testBalanceSmoke(dragonTiger, "dragon", dt.placeBet.bind(dt), params1);
smoke.testBalanceSmoke(dragonTiger, "tie", dt.placeBet.bind(dt), params2);
