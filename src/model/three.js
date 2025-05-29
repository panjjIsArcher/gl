import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
  ShaderMaterial,
  MathUtils,
} from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default class Three {
  constructor(id) {
    this.init(id);
  }
  init(id) {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer({
      canvas: document.querySelector("#" + id),
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.fns = [];
    const context = this;
    function render() {
      renderer.render(scene, camera);
      for (let i = 0; i < context.fns.length; i++) {
        const fn = context.fns[i];
        if (typeof fn === "function") {
          fn();
        }
      }
      requestAnimationFrame(render);
    }
    render();
  }
  createPlane() {
    const plane = new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ side: DoubleSide, color: 0x000000 })
    );
    this.scene.add(plane);
    return plane;
  }
  cameraOrbit() {
    const control = new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.set(0, 0, 1);
    this.fns.push(() => control.update());
    return control;
  }
  createShaderMaterial(uniforms, vertexShader, fragmentShader) {
    return new ShaderMaterial({
      uniforms: uniforms || {},
      vertexShader: vertexShader || "",
      fragmentShader: fragmentShader || "",
    });
  }
  resizePlaneToFillScreen(plane) {
    const distance = Math.abs(plane.position.z - this.camera.position.z);
    const vFov = MathUtils.degToRad(this.camera.fov);
    const height = 2 * Math.tan(vFov / 2) * distance;
    const width = height * this.camera.aspect;
    plane.scale.set(width, height, 1);
  }
}
