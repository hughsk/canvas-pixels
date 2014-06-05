var test = require('tape')
var get = require('./')

test('2d', function(t) {
  var canvas = document.createElement('canvas')
  canvas.width = 10
  canvas.height = 10

  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#f23'
  ctx.fillRect(0, 0, 10, 10)

  check(t, get(ctx), canvas)
})

test('3d', function(t) {
  var canvas = document.createElement('canvas')
  canvas.width = 10
  canvas.height = 10

  var gl = canvas.getContext('webgl')

  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.clearColor(0xff/0xff, 0x22/0xff, 0x33/0xff, 0xff/0xff)
  gl.clear(gl.COLOR_BUFFER_BIT)
  check(t, get(gl), canvas)
})

function check(t, data, canvas) {
  t.equal(data.length
    , canvas.width * canvas.height * 4
    , 'Array is expected size'
  )

  for (var i = 0; i < data.length;) {
    if (data[i++] !== 255) break
    if (data[i++] !== 34) break
    if (data[i++] !== 51) break
    if (data[i++] !== 255) break
  }

  t.equal(data.length, i, 'Every pixel is as expected')
  t.end()
}
