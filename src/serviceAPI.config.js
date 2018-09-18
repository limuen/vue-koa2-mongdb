const BASEURL = 'https://www.easy-mock.com/mock/5b7241c3f22b3d63d2d67d07/SmileVue/';
const LOGINURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo : BASEURL + 'index', //商城首页所有信息
    getGoodsInfo : BASEURL + 'getGoodsInfo', //组件商品列表
    registerUser : LOGINURL + 'user/register', //用户注册接口
    login : LOGINURL + 'user/login', //用户登陆接口
    getDetailGoodsInfo : LOGINURL + 'goods/getDetailGoodsInfo', //获取商品详情
    getCategoryList : LOGINURL + 'goods/getCategoryList', //获取大类列表信息
    getCategorySubList : LOGINURL + 'goods/getCategorySubList', //获取小类列表信息
    getGoodsListByCategorySubID : LOGINURL + 'goods/getGoodsListByCategorySubID' //得到小类商品信息
}

module.exports = URL;