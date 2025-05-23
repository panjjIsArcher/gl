import "./style.css";
import Render from "./utils/init";
document.querySelector("#app").innerHTML = `<div><canvas id="gl" /></div>`;
const render = new Render("gl");
render.setVec3();
