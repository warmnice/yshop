<template>
  <nav>
    <Logo/>
    <ul>
      <li @mouseenter="productHover = true" @mouseleave="handleMouseAction" >产品</li>
      <li>了解产品</li>
    </ul>
    <div class="right">
      <div class="search">
        <input type="text" placeholder="域名">
        <img src="../assets/img/search.png" alt="">
      </div>
      <!-- SVG图标 -->
      <svg t="1707654657022" class="world" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6668" width="5vh" height="5vh"><path d="M419.328 745.472c-7.68 0-15.189333 1.365333-22.528 1.877333a17.066667 17.066667 0 0 0 1.024 34.133334h1.194667l23.552-2.048a17.066667 17.066667 0 1 0-3.242667-34.133334zM109.568 415.061333a17.066667 17.066667 0 0 0 17.066667-17.066666 121.685333 121.685333 0 0 1 68.266666-109.397334 17.066667 17.066667 0 1 0-14.506666-30.890666 156.16 156.16 0 0 0-88.576 140.288 17.066667 17.066667 0 0 0 17.749333 17.066666zM133.973333 521.216A24.405333 24.405333 0 1 0 109.568 546.133333a24.234667 24.234667 0 0 0 24.405333-24.917333z" fill="#8a8a8a" p-id="6669"></path><path d="M284.672 240.810667m-24.234667 0a24.234667 24.234667 0 1 0 48.469334 0 24.234667 24.234667 0 1 0-48.469334 0Z" fill="#8a8a8a" p-id="6670"></path><path d="M940.885333 223.402667l-129.365333-90.112a34.133333 34.133333 0 0 0-54.101333 28.330666v27.648a265.898667 265.898667 0 0 0-107.178667 30.037334 381.098667 381.098667 0 0 0-176.298667-28.842667 17.066667 17.066667 0 0 0 2.56 34.133333 351.914667 351.914667 0 0 1 137.557334 17.066667 244.736 244.736 0 0 0-20.48 17.066667 326.826667 326.826667 0 0 0-90.794667-12.8 322.218667 322.218667 0 0 0-198.144 68.266666 102.4 102.4 0 0 0-114.517333 168.277334 307.2 307.2 0 0 0-7.168 29.525333C119.466667 564.224 90.112 620.544 102.4 670.549333s65.194667 86.869333 145.749333 102.4A324.266667 324.266667 0 0 0 822.272 631.466667c63.317333-51.2 93.354667-108.032 80.725333-158.890667a104.618667 104.618667 0 0 0-34.133333-53.418667 17.066667 17.066667 0 0 0-22.186667 24.576A73.386667 73.386667 0 0 1 870.4 480.597333c7.338667 29.696-8.533333 64.682667-42.325333 99.328v-8.533333a326.656 326.656 0 0 0-109.738667-243.370667c12.970667-1.706667 25.941333-3.072 39.082667-3.584v17.066667a34.133333 34.133333 0 0 0 54.101333 28.16l129.365333-90.112a34.133333 34.133333 0 0 0 0-56.490667z m-692.906666 106.837333a68.266667 68.266667 0 1 1-68.266667 68.266667 68.266667 68.266667 0 0 1 68.266667-68.266667zM135.509333 662.357333c-7.168-29.184 8.192-64.170667 42.154667-99.328v8.362667a324.266667 324.266667 0 0 0 42.154667 159.573333c-46.762667-14.165333-76.8-38.570667-84.309334-68.608z m658.432-90.965333a297.130667 297.130667 0 0 1-3.242666 41.130667 533.845333 533.845333 0 0 1-85.333334 51.2 65.706667 65.706667 0 0 0-116.736 41.472v4.778666c-16.042667 4.949333-32.426667 9.557333-48.810666 13.653334s-31.573333 7.338667-47.274667 10.410666a17.066667 17.066667 0 0 0 3.242667 34.133334 9.386667 9.386667 0 0 0 3.072 0c17.066667-3.072 32.938667-6.656 49.152-10.752s34.133333-9.216 51.2-14.506667a65.877333 65.877333 0 0 0 119.466666-37.034667 67.072 67.072 0 0 0-1.024-10.24 640.341333 640.341333 0 0 0 59.392-34.133333 290.133333 290.133333 0 0 1-477.866666 118.442667c14.165333 1.194667 28.842667 2.048 44.032 2.218666a17.066667 17.066667 0 0 0 17.066666-17.066666 17.066667 17.066667 0 0 0-17.066666-17.066667 512 512 0 0 1-77.653334-6.485333 290.133333 290.133333 0 0 1-55.978666-170.666667 294.058667 294.058667 0 0 1 12.288-74.752 96.085333 96.085333 0 0 0 26.453333 3.584 102.4 102.4 0 0 0 81.749333-162.304 290.133333 290.133333 0 0 1 237.056-50.005333 268.629333 268.629333 0 0 0-47.445333 89.6 17.066667 17.066667 0 0 0 16.213333 22.016 17.066667 17.066667 0 0 0 10.24-3.242667 360.448 360.448 0 0 1 128.682667-59.562667 292.693333 292.693333 0 0 1 119.125333 235.178667z m-107.52 134.656a31.744 31.744 0 1 1-31.573333-31.744 31.573333 31.573333 0 0 1 31.573333 31.744zM921.6 251.904L791.552 341.333333v-34.133333a17.066667 17.066667 0 0 0-17.066667-17.066667 431.957333 431.957333 0 0 0-201.216 48.298667 231.082667 231.082667 0 0 1 201.216-115.370667 17.066667 17.066667 0 0 0 17.066667-17.066666V161.450667L921.6 251.392z" p-id="6671"></path></svg>
      <router-link class="console" to="/console">控制台</router-link>
      <router-link class="login" to="/login">登录/注册</router-link>
    </div>
  </nav>
    <div class="product" v-show="productHover" @mouseenter="productListHover = true" @mouseleave="productHover = productListHover = false">
      <div class="left">
        <ul>
          <li v-for="(item, index) in products" :key="index" @mouseenter="seleted = index">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in products[seleted].productList" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  <div class="know" v-show="knowHover" @mouseover="knowHover=true" @mouseleave="knowHover = knowListHover">了解产品</div>
  <div class="world" v-show="worldHover" @mouseover="worldHover=true" @mouseleave="worldHover = worldListHover">世界站点</div>
  <main>主体</main>
</template>

<script setup>
import { ref } from 'vue'
import Logo from 'components/Logo.vue'
const productHover = ref(false)
const productListHover = ref(false)
const hideTimer = ref(null)
const knowHover = ref(false)
const worldHover = ref(false)
const seleted = ref(0)
const products = ref([
  {
    title: '终端装修',
    productList: ['商城装修']
  },
  {
    title: '商品管理',
    productList: ['商品分类', '管理商品', '商品规格', '运费模板', '浏览记录', '商品收藏', '用户足迹']
  },
  {
    title: '会员管理',
    productList: ['会员', '会员等级', '等级任务', '用户账单', '在线会员']
  },
  {
    title: '订单管理',
    productList: ['订单', '评论管理', '物流快递', '售后']
  },
  {
    title: '电子券管理',
    productList: ['优惠券制作', '已发布优惠券', '优惠券领取记录']
  },
  {
    title: '营销管理',
    productList: ['拼团产品', '拼团列表', '秒杀产品', '秒杀配置', '砍价产品']
  },
  {
    title: '分销管理',
    productList: ['分销配置', '分销记录']
  },
  {
    title: '财务管理',
    productList: ['提现管理', '充值管理', '充值金额配置']
  },
  {
    title: '门店管理',
    productList: ['门店配置', '门店列表', '店员列表', '核销订单']
  },
  {
    title: '积分管理',
    productList: ['积分配置', '积分记录', '签到天数配置']
  },
  {
    title: '微信管理',
    productList: ['微信菜单', '图文管理', '自动回复', '公众号配置', '微信支付配置', '微信模板消息', '小程序配置', '直播管理', '直播商品管理']
  },
  {
    title: '商城配置',
    productList: ['订单消息管理', '热门搜索', '个人中心菜单', '商城系统配置', '阿里云短信', '快递鸟配置', 'App版本']
  },
  {
    title: '系统管理',
    productList: ['用户管理', '角色管理', '菜单管理', '部门管理', '岗位管理', '字典管理']
  },
  {
    title: '系统监控',
    productList: ['在线用户', '操作日志', '异常日志', 'SQL监控']
  },
  {
    title: '系统工具',
    productList: ['定时任务', '代码生成', '存储管理', '邮件工具', '支付宝工具', '后台接口文档']
  }
])
// 处理鼠标离开的逻辑
function handleMouseAction () {
  hideTimer.value = setTimeout(() => {
    productHover.value = productListHover.value
  }, 10)
}
</script>

<style lang="scss" scoped>
@import url(../assets/style/common.scss);
nav {
  height: 8vh;
  border-bottom: 0.05vw solid rgb(186, 183, 183);
  .logo {
    float: left;
    line-height: 8vh;
    font-size: 4vh;
    margin: 0 4vh;
    color: rgb(67, 67, 247);
    cursor: pointer
  }
  ul {
    float: left;
    list-style: none;
    li {
      float: left;
      line-height: 8vh;
      font-size: 2vh;
      margin: 0 1vh;
    }
  }
  .right {
    float: right;
    display: flex;
    height: 100%;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    .search {
      width: 50%;
      height: 60%;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        padding-left: 1vw;
        border: 0.1vw solid rgb(161, 156, 156);
      }
      img {
        position: absolute;
        width: 3vh;
        height: 3vh;
        top: 1.2vh;
        right: 0
      }
    }
    .console {
      color: grey;
    }
    .world {
      cursor: pointer;
      fill: "#8a8a8a";
      &:hover {
        fill: rgb(67, 67, 247);
      }
    }
    .login {
      height: 100%;
      line-height: 8vh;
      padding: 0 2vh;
      background-color: rgb(67, 67, 247);
      color: white;
      font-size: 1.9vh;
    }
  }
}
@keyframes productAnimation {
  0% {
    background-image: linear-gradient(to right, #a6cfed 20%, #2d8fd0);
  }
  20% {
    background-image: linear-gradient(to right, #a6cfed 40%, #2d8fd0);
  }
  50% {
    background-image: linear-gradient(to right, #a6cfed 60%, #2d8fd0);
  }
  80% {
    background-image: linear-gradient(to right, #a6cfed 80%, #2d8fd0);
  }
}
.product {
  position: absolute;
  display: flex;
  height: 60vh;
  background-color: #51a8e2;
  animation: productAnimation 5s linear infinite normal;
  padding-top: 2vh;
  .left {
    width: 20vw;
    ul {
      width: 15vw;
      margin-left: 2vw;
      list-style: none;
      li {
        height: 6%;
        color: black;
        font-weight: 500;
        margin-top: 1vh;
        &:hover {
          color: rgb(67, 67, 247);
          border-bottom: 0.1vh rgb(67, 67, 247) solid;
        }
        &::after {
          content: '';
          display: inline-block;
          margin-left: 1vw;
          width: 1vh;
          height: 1vh;
          border-right: 0.2vh black solid;
          border-top: 0.2vh black solid;
          transform: rotate(45deg);
        }
      }
    }
  }
  .right {
    width: 80vw
  }
}
</style>
