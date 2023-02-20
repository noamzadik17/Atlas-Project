import { doApi } from "./atlasItem.js";
import { declareEvents } from "./atlasEvents.js";


const init = () => {
  doApi("israel");
  declareEvents(doApi);
}

init();