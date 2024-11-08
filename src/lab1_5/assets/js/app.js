function init() {
  /** @type {HTMLCanvasElement} */
  const eleKhungCanvas = document.getElementById("khung-canvas");
  eleKhungCanvas.width = 320;
  eleKhungCanvas.height = 240;

  if (eleKhungCanvas.getContext) {
    // Trình duyệt hỗ trợ HTML Canvas
    const ctx = eleKhungCanvas.getContext("2d");

    // Ví dụ 1: tạo text -------------
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Hello HTML5 Canvas", 10, 80);

    // Ví dụ 2: tạo text chỉ đường viền -------------
    ctx.font = "bold italic 50px Tahoma";
    ctx.strokeStyle = "blue";
    ctx.strokeText("Phú Cường", 10, 150);
    
  } else {
    // Trình duyệt không hỗ trợ HTML Canvas -> hiển thị thông báo ra màn hình
    document.write(
      "Trình duyệt không hỗ trợ HTML Canvas. Vui lòng sử dụng trình duyệt phiên bản cao hơn."
    );
  }
}

window.addEventListener("load", init);
