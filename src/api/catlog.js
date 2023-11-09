import myAxios from '../axios/myAxios'


//  获取分类列表
export const getCatlog = (params) => {
  return myAxios.get("/catlog",)
}


//  获取分类列表ID
export const getCatlogId = (id) => {
  return myAxios.get("/catlog", {
    params: {
      id
    }
  })
}
