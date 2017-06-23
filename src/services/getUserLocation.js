export default function getUserLocation () {
  return new Promise(
    (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
          resolve(location)
        },
        () => reject()
      )
    }
  )
}