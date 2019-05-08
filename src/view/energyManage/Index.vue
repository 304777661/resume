<template>
    <div>
        <div class="energyManageTop">
          <div class="energyManageTop_left_icon pull-left">
            <div class="icon auto"></div>
          </div>
          <div class="energyManageTop_right_search pull-right">
            <div class="search_text pull-left"><Input search placeholder="Enter something..." /></div>
            <div class="pull-left"><Icon type="ios-notifications-outline" /></div>
            <div class="pull-left">
              
              <span class="use_icon"></span>
              
            </div>
            <p class="user_name pull-left">用户名</p>
          </div>
          <div class="energyManageTop_left_title">
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/">能源监控</router-link></li>
              <li><router-link to="/">能源管理</router-link></li>
              <li><router-link to="/">能源支撑</router-link></li>
              <li><router-link to="/">能源支撑</router-link></li>
            </ul>
          </div>
        </div>
        <div class="energyManageContent">
          <router-view></router-view>
        </div>
        
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      
    };
  },
 
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .energyManageTop_left_icon{
    padding-left: 34px;
    padding-top: 6px;
    width: 256px;
    background-color: #03153d;
    height: 100%
  }
  .energyManageTop_left_icon .icon{
    width: 151px;
    background-image: url(../../assets/img/dianwangbg.png);
    background-repeat: no-repeat;
    height: 51px;
  }
  .energyManageTop{
    height: 65px;
    background-color: #002345;

  }
  .energyManageTop_right_search{
    width: 370px;
    height: 100%;
    line-height: 65px;
  }
  .search_text{
    width: 55%;
    margin-right: 22px;
  }
  .ivu-icon{
    font-size: 30px
  }
  .use_icon{
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-top: 21px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 10px;
    background: url(../../assets/img/cat.jpg) no-repeat;
  }
  .energyManageTop_left_title{
    margin-left: 256px;
    margin-right: 370px;
    text-align: center;
    line-height: 65px;
  }
  .user_name{
    /*line-height: 65px;*/
  }
</style>
