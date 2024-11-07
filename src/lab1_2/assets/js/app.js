function init() {
  /** @type {HTMLCanvasElement} */
  const eleKhungCanvas = document.getElementById("khung-canvas");
  eleKhungCanvas.width = 320;
  eleKhungCanvas.height = 240;

  if (eleKhungCanvas.getContext) {
    // Trình duyệt hỗ trợ HTML Canvas
    const ctx = eleKhungCanvas.getContext("2d");

    drawPoint(ctx, centerX, centerY, 2, "red"); // debug only

    // Ví dụ 1: 
    // Vẽ đường cong ARC
    var centerX = 320 / 2; // =160
    var centerY = 240 / 2; // =120
    var radius = 100;
    var startAngle = 0.75 * Math.PI;
    var endAngle = 1.4 * Math.PI;
    var counterClockwise = false;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, counterClockwise);
    ctx.lineWidth = 5;
    ctx.stroke();    

    // Ví dụ 2: 
    // Vẽ đường cong ARC TO
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 20);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.arcTo(200, 20, 200, 70, 50);
    ctx.lineTo(200, 120);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";
    ctx.stroke();
    
  } else {
    // Trình duyệt không hỗ trợ HTML Canvas -> hiển thị thông báo ra màn hình
    document.write(
      "Trình duyệt không hỗ trợ HTML Canvas. Vui lòng sử dụng trình duyệt phiên bản cao hơn."
    );
  }
}

window.addEventListener("load", init);
