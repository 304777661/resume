<template>
  <div id="resume">
    <div class="icon-book animated rotateInDownLeft">
      <i class="pull-left iconfont icon-shuqian"></i>
      <i class="pull-left iconfont icon-zhijiao-triangle"></i>
      <span>个人简历</span>
    </div>
    <div class="top">
      <span class>
        <i class="iconfont icon-gerenyonghutouxiang2"></i>
      </span>
      <p class="a animated fadeInRight" ref="first">张嘉语</p>
      <p class="b animated" v-show="delayOnOff" :class="{fadeInRight:delayOnOff}">所属营业厅，长沙城东电力营业厅</p>
    </div>
    <p class="col-common">
      <span>属地：长沙市望城区-长沙城东营业厅</span>
      <span>联系方式：18671111111</span>
      <span>入职时间：2018/08/08</span>
    </p>
    <div class="col-model">
      <span>基本信息</span>
    </div>
    <p class="col-common four-item">
      <span>姓名：张嘉语</span>
      <span>性别：女</span>
      <span>最高学历：本科</span>
      <span>工号：000000001</span>
    </p>
    <p class="col-common four-item">
      <span>岗位：柜员</span>
      <span>职称：高级工程师</span>
      <span>用工性质：农电</span>
      <span>服装：有</span>
    </p>
    <p class="col-common four-item">
      <span>最近配置服装时间：1990/09/09</span>
      <span>人员状态：在职</span>
      <span>出生日期：1990/09/09</span>
      <span>民族：汉</span>
    </p>
    <p class="col-common four-item col-common-last">
      <span>身份证号码：4430123199001011234</span>
      <span>籍贯：刘洋</span>
      <span>政治面貌：党员</span>
      <span>&nbsp;</span>
    </p>
    <div class="col-model">
      <span>教育经历</span>
    </div>
    <p class="two-item">
      <span>2014年9月 至 2014年9月</span>
      <span>
        <i class="iconfont icon-yuandianxiao"></i> 湖南师范大学
      </span>
    </p>
    <p class="two-item">
      <span>2014年9月 至 2014年9月</span>
      <span>
        <i class="iconfont icon-yuandianxiao"></i> 湖南师范大学
      </span>
    </p>
    <p class="two-item">
      <span>2014年9月 至 2014年9月</span>
      <span>
        <i class="iconfont icon-yuandianxiao"></i> 湖南师范大学
      </span>
    </p>
    <p class="two-item">
      <span>2014年9月 至 2014年9月</span>
      <span>
        <i class="iconfont icon-yuandianxiao"></i> 湖南师范大学
      </span>
    </p>
    <div class="col-model">
      <span>工作经历</span>
    </div>
    <p class="col-none-bor">
      <span>时间：2014年9月 至 2018年9月</span>
    </p>

    <p class="col-none-bor">
      <span>单位：</span>长沙移动通信有限公司
    </p>
    <div class="work-content">
      <span>工作内容：</span>
      <ul>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
      </ul>
    </div>
    <p class="col-none-bor">
      <span>单位：</span>长沙移动通信有限公司
    </p>
    <div class="work-content">
      <span>工作内容：</span>
      <ul>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
        <li>
          <i class="iconfont icon-yuandianxiao"></i>编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表编制会计表
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume",
  data() {
    return {
      delayOnOff: false
    };
  },
  mounted() {
    this.$refs.first.addEventListener("animationend", () => {
      this.delayOnOff = true;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.two-item {
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  span:nth-of-type(1) {
    display: inline-block;
    width: 55%;
  }
  span:nth-of-type(2) {
    display: inline-block;
    width: 35%;
  }
}
.work-content {
  padding: 0 10px 10px 90px;
  position: relative;
  ul {
    > li {
      position: relative;

      padding-left: 20px;
      padding-bottom: 10px;
      i {
        position: absolute;
        left: 0;
      }
    }
  }
  span {
    position: absolute;
    left: 8px;
  }
}
#resume {
  width: 1000px;
  border: 2px solid #a79ca4;
  padding: 30px;
  margin: 0 auto;
  position: relative;
}
.icon-book {
  position: absolute;
  color: #80819f;
  top: -60px;
  left: 0px;
  > i:nth-of-type(1) {
    font-size: 150px;
  }
  > i:nth-of-type(2) {
    font-size: 24px;
    position: relative;
    top: 32px;
    left: -29px;
  }
  span {
    position: absolute;
    width: 50px;
    height: 50px;
    font-size: 24px;
    color: #fff;
    top: 55px;
    left: 50px;
  }
}
.top {
  height: 120px;
  color: #6f6c7d;
  position: relative;
  p {
    text-align: center;
  }
  p:nth-of-type(1) {
    font-size: 24px;
  }
  p:nth-of-type(2) {
    font-size: 18px;
  }
  span {
    position: absolute;
    right: 0;
    height: 100px;
    width: 100px;
    background-color: #9896ac;
    text-align: center;
    i {
      color: #8082a8;
      font-size: 84px;
    }
  }
}
.col-common {
  padding: 0 10px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cbc7c4;
  margin-bottom: 20px;
}
p.col-common-last {
  border-bottom: 1px solid transparent;
  margin-bottom: 40px;
}
.four-item {
  span {
    width: 22%;
  }
  span:nth-of-type(1) {
    width: 34%;
  }
}
.col-model {
  margin: 20px 0;
  background-color: rgba(208, 202, 202, 0.3);
  height: 32px;
  line-height: 32px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  span {
    padding: 0 20px;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
    background-color: #6e728d;
    color: #fff;
    text-align: center;
  }
}
.col-none-bor {
  padding: 0 10px;
  height: 32px;
  span {
    color: #000;
    font-size: 16px;
  }
}
.icon-yuandianxiao {
  color: #887b8c;
}
</style>
