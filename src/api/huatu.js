import myAxios from '../axios/myAxios'


export const reqAllList = (params) => {
  return myAxios.get("/node/node_list", { params })
}
