<template>
  <div class="backlogin">  
    <div class="title">
      亲爱的{{name}},你的登录时间为：{{time()}}.
    </div>
      
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     name: this.$route.query.name
      }   
    },
   methods:{
       time(){
         var de=new Date();
         var s= de.toLocaleString();
        return s;
       }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
