import "./style.css";
import Render from "./utils/init";
document.querySelector("#app").innerHTML = `<div><canvas id="gl" /></div>`;
new Render("gl");
