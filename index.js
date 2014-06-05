module.exports = getPixels
module.exports.get3d = getPixels3d
module.exports.get2d = getPixels2d

function getPixels(ctx) {
  return ctx.readPixels
    ? getPixels3d(ctx)
    : getPixels2d(ctx)
}

function getPixels3d(gl) {
  var canvas = gl.canvas
  var height = canvas.height
  var width  = canvas.width
  var buffer = new Uint8Array(width * height * 4)

  gl.readPixels(0, 0
    , canvas.width
    , canvas.height
    , gl.RGBA
    , gl.UNSIGNED_BYTE
    , buffer
  )

  return buffer
}

function getPixels2d(ctx) {
  var canvas = ctx.canvas
  var height = canvas.height
  var width  = canvas.width

  return ctx.getImageData(0, 0, width, height).data
}
