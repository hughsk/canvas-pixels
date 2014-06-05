# canvas-pixels [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Grab the pixels from a canvas' context, be it 2D or 3D, and return them in
an array.

## Usage

[![NPM](https://nodei.co/npm/canvas-pixels.png)](https://nodei.co/npm/canvas-pixels/)

### pixels = getPixels(context)

Returns `context`'s pixels in an array – with a 2D context, this will be a
`Uint8ClampedArray`, and a webgl context will return a `Uint8Array`.

### pixels.get2d(context)
### pixels.get3d(context)

Same as above, but without the auto-detection.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/canvas-pixels/blob/master/LICENSE.md) for details.
