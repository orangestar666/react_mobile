import axios from "axios";

axios.defaults.baseURL = "http://react.zbztb.cn/site/";

axios.interceptors.response.use(
  function(response) {
    // console.log(response);
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 获取轮播图图片 和推荐商品列表
export const getGoods = ()=>{
  return axios.get("goods/gettopdata/goods")
}
// 获取商品列表 
export const getGoodsGroup = ()=>{
  return axios.get("goods/getgoodsgroup")
}

