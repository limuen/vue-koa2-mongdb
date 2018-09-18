<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="localtion" alt="" width="80%" class="localtion-icon"/>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input">
                </van-col>
                <van-col span="5">
                    <van-button size="mini" class="search-Btn">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <van-notice-bar
        text="商城开业大酬宾，线上线下全部5折，全部5折!!!  下单满199元，免费赠送礼品一份，数量有限，送完为止"
        mode="closeable"
        />
        <!-- swiper area-->
        <div class="swiper-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(item,index) in bannerImgUrl " :key="index">
                    <img v-lazy="item.image" width="100%" >
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type bar -->
        <div class="type-bar">
            <div  v-for="(cate,index) in category" :key="index" >
                    <img v-lazy="cate.image" width="90%" />
                    <span>{{cate.mallCategoryName}}</span> 
            </div>
        </div>
        <!-- adBanner area-->
        <div>
            <img v-lazy="adBanner" alt="" width="100%">
        </div>

        <!-- 商品推荐区域 -->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-box">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(recommend,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="recommend.image" alt="" width="80%">
                            <div>{{recommend.goodsName}}</div>
                            <div>
                                ￥{{recommend.price | MoneyFilter}}(￥{{recommend.mallPrice | MoneyFilter}})
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
        <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
        <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
         <!--Hot Area-->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
            <!--这里需要一个list组件-->
                <van-list>
                    <van-row gutter="20" style="margin:0px;">
                        <van-col span="12" v-for="(item,index) in hotList" :key="index">
                            <goodsInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price" :goodsId="item.goodsId"></goodsInfo>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>



    </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import floorComponent from '../component/floorComponent'
import GoodsInfo from '../component/goodsInfo'
import {toMoney} from '@/filter/MoneyFilter'
import url from '@/serviceAPI.config.js'

export default {
  data() {
    return {
      swiperOption:{
          slidesPerView:3
      },
      msg: "ShoppingMall",
      localtion: require("../../assets/img/localtion.png"),
      bannerImgUrl:[],
      category:[],
      adBanner:'',
      recommendGoods:[],
      floor1:[],
      floor2:[],
      floor3:[],
      floorName:{},
      hotList:[]
    };
  },
  methods: {
      getShoppingMallInfo () {
        axios.get(url.getShoppingMallInfo).then((res) => {
          if (res.data.errno === 0) {
            res = res.data.data
            this.category = res.data.category
            this.adBanner = res.data.advertesPicture.PICTURE_ADDRESS
            this.bannerPicArray = res.data.slides
            this.recommendGoods = res.data.recommend
            this.floor1 = res.data.floor1
            this.floor2 = res.data.floor2
            this.floor3 = res.data.floor3
            this.floorName = res.data.floorName
            this.hotgoods = res.data.hotGoods
          }
        })
      },
      getAllGoodsInfo () {
        axios.get(url.getAllGoodsInfo).then(res => {
          if (res.data.code === 200 && res.data.message.length) {
            res = res.data.message
            this.goodsList = res
          }
        })
      },  
      goGoodsInfo (goodsId) {
        this.$router.push({
          path: '/goods',
          query: {  
            goodsId
          } 
        })
      },
      goCategoryList(CategoryId) {
        this.$router.push({
          path: '/categorylist',
          query: { 
            CategoryId
          } 
        })
      }
    },
  components:{
      swiper,
      swiperSlide,
      floorComponent,
      GoodsInfo
  },
  filters:{
      MoneyFilter(money){
          return toMoney(money)
      }
  },
  created(){
      axios({
          url:url.getShoppingMallInfo,
          method:'get'
      })
      .then(response=>{
          console.log(response);
          if(response.status==200){
              this.category = response.data.data.category;
              this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
              this.bannerImgUrl = response.data.data.slides;
              this.recommendGoods = response.data.data.recommend;
              this.floor1 = response.data.data.floor1;
              this.floor2 = response.data.data.floor2;
              this.floor3 = response.data.data.floor3;
              this.floorName = response.data.data.floorName;
              this.hotList = response.data.data.hotGoods;
          }
      })
      .catch(error=>{
          console.log(error)
      })
  }
};

</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border: none;
  border-bottom: 1px solid #fff !important ;
  background: #e5017d;
  color: #fff;
}
.localtion-icon {
  padding-top: .1rem;
  padding-left: 0.3rem;
}
.swiper-area{
   clear: both;
    max-height: 12rem;
    overflow: hidden;
}
.type-bar{
    background: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
    flex: 1;
}
.recommend-area{
    background: #fff;
    margin-top: .3rem;
}
.recommend-title{
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d
}

.recommend-box{
    border-bottom: 1px solid #eee;
}
.recommend-item{
    width: 99%;
    border-right: 1px solid #eee;font-size: 12px;
    text-align: center;
}
.hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
.hot-title{
    text-align: center;
    background: #ddd;
    color: #fff;
}
.hot-goods{
    height: 125rem;
    overflow: hidden;
    background: #fff;
}
</style>