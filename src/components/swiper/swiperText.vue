<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide class="text">
                <div>
                    针对防洪工作，习近平曾多次要求各地密切关注异常天气，做好预判预警：“要密切监视天气变化，加强雨情水情监测预报预警，加强汛情、灾情分析研判，强化应急值守和会商分析，提前发布预警信息，及时启动应急响应，把握防汛抗洪主动权”，“要加强气象、洪涝、地质灾害监测预警，紧盯各类重点隐患区域，开展拉网式排查，严防各类灾害和次生灾害发生。”

　　打好主动仗，下好先手棋。在防汛抢险救灾工作中，“科学精准预测预报”无疑是第一道防线。

　　此外，习近平还要求“突出防御重点”：“要确保大江大河重要堤防、大中型水库、重要基础设施的防洪安全，努力减轻中小河流、山洪灾害、城市内涝和台风灾害损失”，“针对江河圩堤洪水浸泡时间长、险情增加的情况，落实防汛巡查制度，加大查险排险力度。”江西省通过建立安全管理员巡查报汛制度，为省内1508座小（Ⅰ）型水库和9018座小（Ⅱ）型水库加固了一层保险。

　　此外，江西省还制定了山洪防洪预案和小型水库防洪明白卡，建立起“横向到边、纵向到底”的应急预案体系。

　　福建省的预警体系则包括向社会赠发防灾指南和读本、向全省15000多个村庄发放预警铜锣，并为929个乡镇配备卫星电话等措施。

　　2016年9月15日登陆厦门的“莫兰蒂”台风是当时全球最强的台风之一，在这套预警体系下，厦门市有效降低了伤亡损失。

　　福建省如今又配备了105套卫星云图接收系统覆盖全省各市县，4个多普勒气象雷达可提前推断可能的降雨量，包括1200个遥测站点、99座中继站和119个地县分中心的雨情监测系统，可在发现异常降雨时自动发出警报，以及可以收集台风路径预测消息并即时生成综合预报路径图的台风路径系统……
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    direction:'vertical',
                    slidesPerView:'auto',
                    freeMode:true,
                    mousewheel:true
                }
            }
        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    .swiper{
        height: 300px;
        overflow: hidden;
    }
    .text{
        font-size: 18px;
        text-align: left;
        padding: 30px;
        height: auto;
        -webkit-box-sizing:border-box;
        box-sizing: border-box;
    }
</style>