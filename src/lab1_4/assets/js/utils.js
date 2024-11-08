function drawPoint(ctx, x, i, radius, color) {
  // save style
  var preventStrokeStyle = ctx.strokeStyle;
  var preventFillStyle = ctx.fillStyle;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.arc(x, i, radius, 0 * Math.PI, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();

  // restore style
  ctx.beginPath();
  ctx.strokeStyle = preventStrokeStyle;
  ctx.fillStyle = preventFillStyle;
}