<template>
  <div class="backlogin">  
    <div class="title">
      <router-link :to="{path:'/Login',query:{name:''}}"  >登录</router-link>
    </div>
    <div class="title">
       <router-link :to="{path:'/Register'}" >注册</router-link>
    </div>
      
     
  </div>
</template>
<style scoped>
    .title{
        color: #273444;
        font-size: 1.5em;
        text-align: center;
        margin: 0 0 20px 0;
    }
    
    @media only screen and (max-width: 768px) {
        .login_box{
            width: 280px;
            margin: 50px auto;
        }
    }
</style>