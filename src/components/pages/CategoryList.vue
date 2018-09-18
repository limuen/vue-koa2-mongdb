<template>
    <div>
        <div class="navbar-div">
            <van-nav-bar title="类别列表" />
        </div>

        <div>
            <van-row>
                <van-col span="6">
                    <div id="leftNav">
                        <ul>
                            <li v-for="(item,index) in getCategoryList" :key="index" @click="clickActive(index,item.ID)" :class="{categoryActice:categoryIndex==index}">
                                {{item.MALL_CATEGORY_NAME}}
                            </li>
                        </ul>
                        
                    </div>
                </van-col>
                <van-col span="18">
                    <div class="tabCategorySub">
                        <van-tabs v-model="active" @click="onClickCategorySub">
                            <van-tab v-for="(item,index)  in categorySub" :key="index" :title="item.MALL_SUB_NAME">
                               
                            </van-tab>
                        </van-tabs>
                    </div>

                    <div id="list-div">
                        <van-pull-refresh v-model="isLoading"  @refresh="onRefresh">
                            <van-list v-model="loading" :finished="finished" @load="onLoad">
                                <div v-for="(item,index) in goodList" :key="index" class="list-item" @click="goGoodInfo(item.ID)">
                                    <div class="list-item-img">
                                        <img :src="item.IMAGE1"  
                                        width="100%"
                                        :onerror="errorImg"
                                        />
                                    </div>
                                    <div class="list-item-text">
                                        <div>{{item.NAME}}</div>
                                        <div>￥{{item.ORI_PRICE | moneyFilter}}</div>
                                    </div>
                                </div>
                            </van-list>
                        </van-pull-refresh>
                    </div>


                </van-col>
            </van-row>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import url from "@/serviceAPI.config.js";
import { Toast } from "vant";
import { toMoney } from '@/filter/MoneyFilter.js'
export default {
  data() {
    return {
      getCategoryList: [],
      categoryIndex: 0,
      categorySub: [], //小类类别
      active: 0, //激活标签的值
      loading: false, //上拉加载一个变量
      finished: false, //上拉加载是否有数据
      isLoading: false, //下载刷新
      page: 1, //商品列表页数
      goodList: [], //商品列表信息
      categorySubId: "", //商品子类id
      errorImg:'this.src="'+require('@/assets/img/errorimg.png')+'"'
    };
  },
  created() {
    this.getCategory();
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight;
    document.getElementById("leftNav").style.height = winHeight - 46 - 50 + "px";
    document.getElementById("list-div").style.height = winHeight - 90 -50 + "px";
  },
  filters:{
      moneyFilter(money){
          return toMoney(money)
      }
  },
  methods: {
    getCategory() {
      axios({
        url: url.getCategoryList,
        method: "get"
      })
        .then(response => {
          // console.log(response)
          if (response.data.code == 200 && response.data.message) {
            this.getCategoryList = response.data.message;
            this.getCateGorySubByCategoryID(this.getCategoryList[0].ID);
          } else {
            Toast("服务器错误,数据获取失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    clickActive(index, CategoryId) {
      this.categoryIndex = index;
      this.page = 1;
      this.finished = false;
      this.goodList = [];
      this.getCateGorySubByCategoryID(CategoryId);
    },
    // 根据大类ID读取小类列表
    getCateGorySubByCategoryID(CategoryId) {
      axios({
        url: url.getCategorySubList,
        method: "post",
        data: {
          CategoryId: CategoryId
        }
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200 && response.data.message) {
            this.categorySub = response.data.message;
            this.active = 0;
            this.categorySubId = this.categorySub[0].ID;
            this.onLoad();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 上拉加载方法
    onLoad() {
      setTimeout(() => {
        this.categorySubId = this.categorySubId
          ? this.categorySubId
          : this.categorySub[0].ID;
        this.getGoodsList();
      }, 1000);
    },
    // 下拉刷新方法
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.finished = false;
        this.goodList = [];
        this.page = 1;
        this.onLoad();
      }, 500);
    },
    // 获取商品信息
    getGoodsList() {
      axios({
        url: url.getGoodsListByCategorySubID,
        method: "post",
        data: {
          categorySubId: this.categorySubId,
          page: this.page
        }
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200 && response.data.message.length) {
            this.page++;
            this.goodList = this.goodList.concat(response.data.message);
            console.log(this.goodList);
          } else {
            this.finished = true;

          }
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 小类类别
    onClickCategorySub(index, title) {
      this.categorySubId = this.categorySub[index].ID;
      console.log("categorySubId:" + this.categorySubId);
      this.goodList = [];
      this.finished = false;
      this.page = 1;
      this.onLoad();
    },
    // 跳转到商品详情页
    goGoodInfo(id){
      this.$router.push({name:'Goods',params:{goodsId:id}})
    }
  }
};
</script>

<style scoped>
#leftNav {
  background: aliceblue;
}
#leftNav ul li {
  line-height: 2rem;
  border-bottom: 1px solid #e4e4e4;
  padding: 3px;
  font-size: 0.8rem;
  text-align: center;
}
.categoryActice {
  background: #fff;
}
#list-div {
  overflow: scroll;
}

.list-item {
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  padding: 5px;
}
#list-div {
  overflow: scroll;
}
.list-item-img {
  flex: 8;
}
.list-item-text {
  flex: 16;
  margin-top: 10px;
  margin-left: 10px;
}
</style>