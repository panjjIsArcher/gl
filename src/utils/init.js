import { cube, fragment } from "../model/cube";
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
  setVec3() {
    const gl = this.gl;
    // 顶点着色器
    const vecShader = gl.createShader(gl.VERTEX_SHADER);
    const vecShaderSource = cube;
    gl.shaderSource(vecShader, vecShaderSource);
    gl.compileShader(vecShader);

    // 片元着色器
    const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    const fragShaderSource = fragment;
    gl.shaderSource(fragShader, fragShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vecShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    // 创建缓冲区
    const positions = [0.0, 0.5, -0.5, -0.5, 0.5, -0.5];
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // 获取着色器中属性和统一变量的位置
    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "gl_Position"
    );
    const colorUniformLocation = gl.getUniformLocation(program, "gl_FragColor");

    // 告诉 WebGL 如何从缓冲区读取数据到顶点着色器的属性
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // 使用着色器程序
    gl.useProgram(program);

    // 设置三角形颜色（RGBA）
    gl.uniform4f(colorUniformLocation, 1.0, 0.0, 0.0, 1.0); // 红色

    // 清除画布
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 绘制三角形
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
