function init() {
  /** @type {HTMLCanvasElement} */
  const eleKhungCanvas = document.getElementById("khung-canvas");
  eleKhungCanvas.width = 320;
  eleKhungCanvas.height = 240;

  if (eleKhungCanvas.getContext) {
    // Trình duyệt hỗ trợ HTML Canvas
    const ctx = eleKhungCanvas.getContext("2d");
    const canvasBoundingClientRect = eleKhungCanvas.getBoundingClientRect();

    // Ví dụ 1:
    eleKhungCanvas.addEventListener("click", function (event) {
      // const x = event.x - canvasBoundingClientRect.left;
      // const y = event.y - canvasBoundingClientRect.top;
      console.log(event);
      const x = event.offsetX;
      const y = event.offsetY;

      ctx.clearRect(0, 0, eleKhungCanvas.width, eleKhungCanvas.height);
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.stroke();
    });
  } else {
    // Trình duyệt không hỗ trợ HTML Canvas -> hiển thị thông báo ra màn hình
    document.write(
      "Trình duyệt không hỗ trợ HTML Canvas. Vui lòng sử dụng trình duyệt phiên bản cao hơn."
    );
  }
}

window.addEventListener("load", init);
