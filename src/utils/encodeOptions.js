function encode (v) {
  if (v == null) {
    return v
  }
  if (v instanceof Date) {
    return encodeURIComponent(v.toString())
  }
  if (typeof v === 'object') {
    return encodeURIComponent(JSON.stringify(v))
  }
  return encodeURIComponent(v)
}

export default function encodeOptions (options) {
  return Object.keys(options)
    .map(key => `${key}=${encode(options[key])}`)
    .join('&')
}
