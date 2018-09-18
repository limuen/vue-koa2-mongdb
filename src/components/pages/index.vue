<template>
    <div>
        <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-button type="danger" @click="onClickphp">
            请求小松的后台
        </van-button>
    </div>
</template>

<script>
    // import axios from 'axios'
    import {Toast} from 'vant'
    export default {
        data() {
            return {
                
            }
        },
         methods: {
            onClickLeft() {
            Toast('返回');
            },
            onClickRight() {
            Toast('按钮');
            },
            onClickphp(){
                this.$http({
                    url:'http://ceshi2.bobgame.cn/app.php?s=/BobLogin/test.html',
                    method:'get'
                })
                .then(repsonse=>{
                    console.log(repsonse)
                })
                .catch(error=>{
                    console.log(error)
                })
                // axios({
                //     url:'http://ceshi2.bobgame.cn/app.php?s=/BobLogin/test.html',
                //     method:'get'
                // })
                
            }
        }
    }
</script>

<style scoped>

</style>