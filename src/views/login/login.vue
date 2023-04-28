<template>
    <n-space>
      <div>
        账号
        <n-input
          type="text"
          placeholder="可以清除"
          clearable
          v-model:value="loginInfo.user.id"
          class="w-20"
        />
      </div>
      <div>
        密码
        <n-input
          type="password"
          placeholder="可以清除"
          clearable
          v-model:value="loginInfo.user.pwd"
        />
      </div>
      <div>
        验证码
        <n-input
          type="text"
          placeholder="可以清除"
          clearable
          v-model:value="loginInfo.user.captcha"
          class="w-20"
        />
      </div>
      <div class="w-16 mt-4" @click="refreshCaptch">
        <!-- <img :src="imgSrc" alt="" /> -->
        <img src="../assets/02.jpg" alt="">
      </div>
    </n-space>
    <n-button
      @click=""
      class="w-20 h-10 antialiased italic text-center bg-green-200"
      >login</n-button
    >
  </template>
<script setup lang="ts">
import { reactive } from 'vue';
import { message } from '../../components/Dialog';

let loginInfo = reactive({
    user:{
        id:'',
        pwd:'',
        captcha:''
    }
})
function refreshCaptch(){
    message.info("热烈的🐎")
}
</script>

<style scoped>

</style>