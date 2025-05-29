import "./style.css";
import Three from "./model/three";
import Background from "./model/background";

const instance = new Three("gl");
// instance.camera.position.set(0, 0, 5); // 设置位置
const plane = instance.createPlane();
plane.position.z = -(instance.camera.near + 0.01);
instance.resizePlaneToFillScreen(plane);
window.addEventListener("resize", () => {
  const camera = instance.camera;
  const renderer = instance.renderer;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  instance.resizePlaneToFillScreen(plane);
});

// 生成背景
const bg = new Background(plane);
bg.transitionBg();
