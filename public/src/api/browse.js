const host = import.meta.env.VITE_HOST
const base = `${host}/browse`
const browseApis = {
  ping: `${base}/ping`,
}
export default browseApis