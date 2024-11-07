function init() {
  /** @type {HTMLCanvasElement} */
  const eleKhungCanvas = document.getElementById("khung-canvas");
  eleKhungCanvas.width = 320;
  eleKhungCanvas.height = 240;

  if (eleKhungCanvas.getContext) {
    // Trình duyệt hỗ trợ HTML Canvas
    const ctx = eleKhungCanvas.getContext("2d");

    // Ví dụ 1: 
    // Quadratic curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 150);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
    
  } else {
    // Trình duyệt không hỗ trợ HTML Canvas -> hiển thị thông báo ra màn hình
    document.write(
      "Trình duyệt không hỗ trợ HTML Canvas. Vui lòng sử dụng trình duyệt phiên bản cao hơn."
    );
  }
}

window.addEventListener("load", init);
