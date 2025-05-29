const bgConfig = {
  transition: {
    vertexShader: `
			varying vec2 vUv;
			void main()	{
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
		`,
    fragmentShader: `
			uniform sampler2D t1;
			uniform sampler2D t2;
			uniform float progress;
			varying vec2 vUv;
		`,
  },
};

export { bgConfig };
