import "./style.css";
import Three from "./model/three";

const instance = new Three("gl");

instance.cameraOrbit();
instance.createPlane();
