// 顶点着色器;
const cube = `
		attribute vec2 direcntion; // 订点位置 
		void main(){
				gl_Position = vec4(direcntion, 0.0, 1.0);
		}
`;
// 片元着色器
const fragment = `
	precision mediump float;
	uniform vec4 color; // 三角形颜色
  void main(){
		gl_FragColor = color;
	}
`;

export { cube, fragment };
