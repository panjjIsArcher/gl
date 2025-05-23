attribute vec4 apos;

export default class Render {
  constructor(id = "gl") {
    const canvas = document.getElementById(id);
    if (canvas) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      canvas.height = screenHeight;
      canvas.width = screenWidth;
      this.gl = canvas.getContext("webgl");
      this.canvas = canvas;
    }
  }
  // 设置着色器
  setGeo() {
    if (!this.gl) {
      return;
    }
    const gl = this.gl;
    const data = new Float32Array([0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5]); // 四边形的4个顶点
    gl.drawArrays(gl.LINE_LOOP, 0, 4);
  }
}
