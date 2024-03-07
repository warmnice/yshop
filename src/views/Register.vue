<template>
  <nav>
    <Logo/>
  </nav>
  <section>
    <div class="left">
      <div>微信扫码注册</div>
      <img src="" alt="">
    </div>
    <div class="right">
      <div class="nav">
        <router-link to="/register/nameregister" :class="{active : nameActive}" @click="nameActive = true, numberActive = false">账号密码注册</router-link>
        <router-link to="/register/numberregister" :class="{active : numberActive}" @click="numberActive = true, nameActive = false">手机验证码注册</router-link>
      </div>
      <router-view class="view" v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
         </keep-alive>
      </router-view>
      <router-link to="/login" class="login">登录</router-link>
    </div>
  </section>
</template>

<script setup>
import Logo from 'components/Logo.vue'
import { ref } from 'vue'
const nameActive = ref(false)
const numberActive = ref(false)
</script>

<style lang="scss" scoped>
@mixin desktop {
    @media (min-width: $desktop-width) {
        @content;
    }
}
@mixin pad {
    @media (max-width: $desktop-width) {
        @content;
    }
}
@mixin mobile {
    @media (min-width: $mobile-width) {
        @content;
    }
}
$desktop-width: 850px;
nav {
  height: 60px;
  border-bottom: 0.05vw solid rgb(186, 183, 183);
}
section {
  width: 700px;
  height: 450px;
  position: absolute;
  top: 140px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgb(0,0,0,0.1);
  @include desktop {
    right: 100px;
  }
  .left {
    width: 40%;
    height: 75%;
    text-align: center;
    border-right: 1px solid rgb(0, 0, 0, 0.2);
  }
  .right {
    position: relative;
    width: 60%;
    height: 100%;
    overflow: hidden;
    .nav {
      display: flex;
      margin-top: 55px;
      font-size: 3vh;
      a {
        margin-left: 40px;
        color:black;
        padding-bottom: 0.3vh;
      }
    }
    .login {
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 55px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
      text-align: right;
      padding: 8px 8px;
      color: white;
      background-image: linear-gradient(to right, rgb(125, 153, 219), rgb(67, 67, 247))
    }
    .view {
      width: 80%;
      margin-left: 40px;
      margin-top: 80px;
    }
  }
}
.active {
  color: rgb(67, 67, 247);
  border-bottom: 3px solid rgb(67, 67, 247);
}
</style>
