function init() {
  /** @type {HTMLCanvasElement} */
  const eleKhungCanvas = document.getElementById("khung-canvas");
  eleKhungCanvas.width = 320;
  eleKhungCanvas.height = 240;

  if (eleKhungCanvas.getContext) {
    // Trình duyệt hỗ trợ HTML Canvas
    const ctx = eleKhungCanvas.getContext("2d");

    // Ví dụ 1: màu nền gradient -------------
    // Tạo linear gradient
    const grad = ctx.createLinearGradient(0, 0, 250, 0);
    grad.addColorStop(0, "lightBlue");
    grad.addColorStop(0.5, "purple");
    grad.addColorStop(1, "darkBlue");

    // Vẽ hình chữ nhật với màu nền gradient
    ctx.fillStyle = grad;
    ctx.fillRect(50, 50, 200, 150);

    // Ví dụ 2: màu nét vẽ gradient -------------
    // Tạo linear gradient
    const grad2 = ctx.createLinearGradient(0, 0, 280, 0);
    grad2.addColorStop(0, "#5813ed");
    grad2.addColorStop(1, "#f09678");

    // Vẽ hình chữ nhật với màu nét vẽ gradient
    ctx.lineWidth = 10;
    ctx.strokeStyle = grad2;
    ctx.strokeRect(10, 10, 200, 100);

    // Ví dụ 3: màu nền gradient
    // Tạo linear gradient
    const grad3 = ctx.createLinearGradient(0, 0, 0, 280);
    grad3.addColorStop(0, "red");
    grad3.addColorStop(0.5, "green");
    grad3.addColorStop(1, "blue");

    // Vẽ hình chữ nhật với màu nền gradient
    ctx.beginPath();
    ctx.fillStyle = grad3;
    ctx.arc(250, 80, 60, 0, 2 * Math.PI);
    ctx.fill();
    
  } else {
    // Trình duyệt không hỗ trợ HTML Canvas -> hiển thị thông báo ra màn hình
    document.write(
      "Trình duyệt không hỗ trợ HTML Canvas. Vui lòng sử dụng trình duyệt phiên bản cao hơn."
    );
  }
}

window.addEventListener("load", init);
