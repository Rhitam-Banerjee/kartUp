const host = import.meta.env.VITE_HOST
const base = `${host}/auth`
const authApis = {
  ping: `${base}/ping`,
}
export default authApis