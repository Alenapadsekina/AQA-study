import CrazyTime from "../games/CrazyTime";
import GenericSmokeTest from "./GenericSmokeTest";
import { crazyTime } from "../config";

let ct = new CrazyTime();
let smoke = new GenericSmokeTest();
let params = [5];

smoke.testAbstractGameSmoke(crazyTime);
smoke.testBalanceSmoke(crazyTime, "bet on all", ct.betOnAll.bind(ct), params);
