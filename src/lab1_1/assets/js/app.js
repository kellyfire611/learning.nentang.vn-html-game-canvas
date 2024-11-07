function init() {
  /** @type {HTMLCanvasElement} */
  const eleKhungCanvas = document.getElementById("khung-canvas");
  eleKhungCanvas.width = 320;
  eleKhungCanvas.height = 240;

  if (eleKhungCanvas.getContext) {
    // Trình duyệt hỗ trợ HTML Canvas
    const ctx = eleKhungCanvas.getContext("2d");

    drawPoint(ctx, 0, 0, 3, "blue"); // debug only
    drawPoint(ctx, 50, 200, 3, "blue"); // debug only
    drawPoint(ctx, 100, 50, 3, "blue"); // debug only
    drawPoint(ctx, 300, 20, 3, "blue"); // debug only
    drawPoint(ctx, 150, 150, 3, "blue"); // debug only
    drawPoint(ctx, 200, 100, 3, "blue"); // debug only
    drawPoint(ctx, 75, 125, 3, "blue"); // debug only

    // Ví dụ 1: 
    // Vẽ đường thẳng LINE từ tọa độ (0, 0) -> đến tọa độ (50, 200)
    ctx.beginPath();      // 1. Thông báo bắt đầu một đường vẽ mới
    ctx.moveTo(0, 0);     // 2. Di chuyển vị trí bắt đầu vẽ về tọa độ (0, 0)
    ctx.lineTo(50, 200);  // 3. Vẽ đường thẳng tới tọa độ (50, 200)
    ctx.stroke();         // 4. Hiển thị đường vẽ ra màn hình

    // Ví dụ 2: 
    // Vẽ đường thẳng LINE từ tọa độ (100, 50) -> đến tọa độ (300, 20)
    // Có độ dày nét là 3; nét màu đỏ
    ctx.beginPath();          // 1. Thông báo bắt đầu một đường vẽ mới
    ctx.moveTo(100, 50);      // 2. Di chuyển vị trí bắt đầu vẽ về tọa độ (100, 50)
    ctx.lineTo(300, 20);      // 3. Vẽ đường thẳng tới tọa độ (300, 20)
    ctx.lineWidth = 3;        // 4. Set độ dày nét là 3
    ctx.strokeStyle = "red";  // 5. Set style cho nét vẽ (stroke) là đỏ
    ctx.stroke();             // 5. Hiển thị đường vẽ ra màn hình

    // Ví dụ 3:
    // Vẽ hình tam giác
    ctx.beginPath();            // 1. Thông báo bắt đầu một đường vẽ mới
    ctx.moveTo(150, 150);       // 2. Di chuyển vị trí bắt đầu vẽ về tọa độ (150, 150)
    ctx.lineTo(200, 100);       // 3. Vẽ đường thẳng tới tọa độ (200, 100)
    ctx.lineTo(75, 125);        // 4. Vẽ đường thẳng tới tọa độ (75, 125)
    ctx.fillStyle = "red";      // 5. Set style cho màu nền (fill) là đỏ
    ctx.strokeStyle = "black";  // 6. Set style cho nét vẽ (stroke) là đen
    ctx.fill();                 // 7. Hiển thị màu nền ra màn hình
    ctx.closePath();            // 8. Tự động vẽ đường khép lại đường path
    ctx.stroke();               // 9. Hiển thị đường vẽ ra màn hình
    
  } else {
    // Trình duyệt không hỗ trợ HTML Canvas -> hiển thị thông báo ra màn hình
    document.write(
      "Trình duyệt không hỗ trợ HTML Canvas. Vui lòng sử dụng trình duyệt phiên bản cao hơn."
    );
  }
}

window.addEventListener("load", init);
