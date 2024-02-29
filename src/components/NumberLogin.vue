<template>
  <div>
    <div class="input">
      +86
      <input type="text" placeholder="请输入手机号" v-model.number="phoneNumber" @blur="phone = phone.toString().slice(0, 11), phoneValid = phone !== ''">
    </div>
    <div class="input number">
      <input type="text" placeholder="请输入验证码" v-model.number="number" @blur="number = number.toString().slice(0, 6) , numberValid = !phoneValid || number !== ''">
      <a href="#" @click="getMsgNum">获取验证码</a>
    </div>
    <a href="#" class="forget">忘记密码</a>
    <p class="tips" v-show="!phoneValid">请输入手机号</p>
    <p class="tips" v-show="!numberValid">请输入验证码</p>
    <p class="tips" v-show="!agree">阅读并勾选协议</p>
    <p>
     <span :class="{agree : clickAgree}" @click="clickAgree=!clickAgree"></span>
     登录即视为您已阅读并同意<a href="">服务条款、隐私政策</a>
    </p>
    <div class="login" @click="validateNum">登录</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import http from '../axios/http'
const phone = ref('')
const number = ref('')
const phoneValid = ref(true)
const numberValid = ref(true)
const agree = ref(true)
const clickAgree = ref(false)
const messageData = ref('')
const phoneNumber = ref('')
const requestMap = reactive({
  phoneNumber: phoneNumber
})
// 获取验证码
function getMsgNum () {
  http.post('sms/smsXxs', JSON.stringify(requestMap)).then(_res => {
    alert('获取验证码成功')
    messageData.value = _res
    console.log(_res)
  }).catch(_error => {
    alert('获取验证码失败')
    console.log(_error)
  })
}
// 登录按钮
function validateNum () {
  http.post('sms/validateNum').then(_res => {
    if (_res.status === '404') {
      alert('验证码已过期')
    } else if (_res.status === '500') {
      alert('验证码错误')
    } else {
      alert('验证成功')
    }
  }).catch(_error => {
    alert('验证码有误')
  })
}
</script>

<style lang="scss" scoped>
@import url(../assets/style/common.scss);
.number {
  display: flex;
  align-items: center;
  input {
    width: 60%;
  }
  a {
    float: right;
    width: 30%;
    height: 55%;
    color: grey;
    padding-left: 10px;
    border-left: 1px rgb(162, 158, 158) solid;
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
