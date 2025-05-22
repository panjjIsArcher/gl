export default class Render {
  constructor(id = "gl") {
    const canvas = document.getElementById(id);
    if (canvas) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      canvas.height = screenHeight;
      canvas.width = screenWidth;
      this.canvas = canvas;
    }
  }
}
