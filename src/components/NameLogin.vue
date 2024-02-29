<template>
  <div>
    <div class="input">
      <input type="text" placeholder="用户名/手机号/邮箱" v-model.number="username">
    </div>
    <div class="input password">
      <input type="password" placeholder="密码" v-model.number="number">
      <a href="#" @click="show = !show">
        <img src="../assets/img/disable.png" alt="" v-if="show">
        <img src="../assets/img/visable.png" alt="" v-else>
      </a>
    </div>
    <a href="#" class="forget">忘记密码</a>
    <p class="tips" v-show="!usernameValid">请输入账号</p>
    <p class="tips" v-show="!passwordValid">请输入密码</p>
    <p class="tips" v-show="!agree">阅读并勾选协议</p>
    <p>
     <span :class="{agree : clickAgree}" @click="clickAgree=!clickAgree"></span>
     登录即视为您已阅读并同意<a href="">服务条款、隐私政策</a>
    </p>
    <div class="login" @click="validateNum">登录</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const number = ref('')
const usernameValid = ref(true)
const passwordValid = ref(true)
const agree = ref(true)
const clickAgree = ref(false)
</script>

<style lang="scss" scoped>
@import url(../assets/style/common.scss);
.password {
  display: flex;
  align-items: center;
  input {
    width: 80%;
  }
  a {
    width: 20%;
    margin-right: 10px;
  }
  img {
    float: right;
    width: 20px;
    height: 20px;
  }
}
p {
  margin-top: 8vh;
  font-size: 13px;
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 3px;
    border: 1px black solid;
  }
}
.tips {
  position: absolute;
  left: 40px;
  top: 200px;
  font-size: 12px;
  color: red;
}
.agree {
  background: url(../assets/img/right.png);
  background-size: contain;
}
.login {
  margin-top: 20px;
  height: 40px;
  background-color: rgb(67, 67, 247);
  text-align: center;
  line-height: 40px;
  color: white;
}
.forget {
  display: inline-block;
  margin-top: 10px;
  font-size: 10px;
}
</style>
