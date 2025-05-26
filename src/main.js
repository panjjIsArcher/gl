import "./style.css";
import Render from "./utils/init";
import Three from "./model/three";
const instance = new Three("gl");

const render = new Render("gl");
render.setVec3();
