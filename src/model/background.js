import { ShaderMaterial } from "three";

export default class Background {
  constructor(bgMesh) {
    this.bgMesh = bgMesh;
  }
  transitionBg(uniforms = {}, vertexShader = "", fragmentShader = "") {
    const shaderMaterial = new ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    this.bgMesh.material = shaderMaterial;
    return shaderMaterial;
  }
}
