<template>
  <div id="login" class="class-bg">
    <header>
      <div class="top">
        <div>
          <img src="../../assets/img/loginpage-login.png" alt>
          <div>
            <p>综合能源智慧服务平台</p>
            <span>Intergarted Energy Intellgence Service Platform</span>
          </div>
        </div>
        <div>
          <span>
            <img src="../../assets/img/loginpage-index-icon.png" alt>
            设为首页
          </span>
          <span>
            <img src="../../assets/img/loginpage-star.png" alt>
            加入收藏
          </span>
        </div>
      </div>
    </header>
    <section></section>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#login {
  background-image: url("../../assets/img/loginpage-bg.jpg");
  display: flex;
  flex-direction: column;
  width: 1440px;
  min-width: 1280px;
  margin: 0 auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: #09193d;
    box-shadow: 0px 4px 7px 0px rgba(1, 13, 58, 0.31);
    border: solid 1px #142f6a;
    .top {
      > div:nth-of-type(1) {
        display: flex;
        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
  }
  section {
    flex: 1;
  }
}
</style>