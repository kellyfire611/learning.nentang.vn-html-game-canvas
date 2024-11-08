function init() {
  /** @type {HTMLCanvasElement} */
  const eleKhungCanvas = document.getElementById("khung-canvas");
  eleKhungCanvas.width = 320;
  eleKhungCanvas.height = 240;

  if (eleKhungCanvas.getContext) {
    // Trình duyệt hỗ trợ HTML Canvas
    const ctx = eleKhungCanvas.getContext("2d");

    drawPoint(ctx, 50, 50, 5, "red"); // debug only

    // Ví dụ 1: 
    // Vẽ hình chữ nhật RECTANGLE không tô màu nền
    ctx.rect(50, 50, 200, 100);
    ctx.stroke();

    // Ví dụ 2: 
    // Vẽ hình chữ nhật RECTANGLE có tô màu nền
    ctx.fillStyle = "blue";
    ctx.fillRect(75, 75, 90, 50);

    // Ví dụ 3: 
    // Vẽ hình chữ nhật RECTANGLE không tô màu nền
    ctx.strokeStyle = "green";
    ctx.strokeRect(180, 120, 100, 100);

    // Ví dụ 4: 
    // Vẽ hình chữ nhật RECTANGLE dùng để xóa màn hình
    ctx.clearRect(240, 100, 30, 30);
    
  } else {
    // Trình duyệt không hỗ trợ HTML Canvas -> hiển thị thông báo ra màn hình
    document.write(
      "Trình duyệt không hỗ trợ HTML Canvas. Vui lòng sử dụng trình duyệt phiên bản cao hơn."
    );
  }
}

window.addEventListener("load", init);
