import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export default class Three {
  constructor(id) {
    this.init(id);
  }
  init(id) {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.setAttribute("id", id);
    document.body.appendChild(renderer.domElement);
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
  }
}
