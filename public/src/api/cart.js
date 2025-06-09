const host = import.meta.env.VITE_HOST
const base = `${host}/cart`
const cartApis = {
  ping: `${base}/ping`,
}
export default cartApis