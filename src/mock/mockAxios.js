import Mock from 'mockjs'  //导入mockjs

//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据

Mock.mock('/getData', 'get', {
  status: 200, //请求成功状态码
  dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],//模拟的请,
})


// Mock.mock('http://down.ddrj.com:88/api?action=gettoken&key=abc', 'get', {
//   "token": "3167433b2ce7a0d4d80188375f965258"
// })
// Mock.mock('http://down.ddrj.com:88/api?action=getactionnames', 'get', {
//   "token": "3167433b2ce7a0d4d80188375f965258"
// })
// Mock.mock('http://127.0.0.1:88/api?action=GetToken&token=718852cfd326cde5aa4806323d8547eb', 'get',
//   {
//     "action": "GetExtenInfOs",
//     "result": {
//       "100@顶顶通": "{\"param\":{\"allow-empty-password\":false},\"variable\":{\"sip-force-expires-min\":\"50\",\"sip-force-expires-max\":\"600\",\"sip-expires-max-deviation\":\"10\",\"sip-force-contact\":\"NDLB-connectile-dysfunction-2.0\"}}",
//       "121@顶顶通": null
//     }
//   }
// )
