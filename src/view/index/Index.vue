<template>
  <div id="index">
    <!-- <div id="myChart" :style="{width: '600px', height: '600px'}"></div> -->
    <div class="top animated slideInDown">
      <ul class="top-nav">
        <li>
          <a
            href
            class="animated top-nav-text"
            @mouseover="addShake($event)"
            @mouseleave="removeShake($event)"
          >能源监控</a>
        </li>
        <li>
          <a
            class="animated top-nav-text"
            @mouseover="addShake($event)"
            @mouseleave="removeShake($event)"
            @click="otherPage('/energyManage')"
          >能源管理</a>
        </li>
        <li>
          <a
            href
            class="animated top-nav-text"
            @mouseover="addShake($event)"
            @mouseleave="removeShake($event)"
          >能源分析</a>
        </li>
        <li class="top-index-text">
          <span>首页</span>
        </li>
        <li>
          <a
            href
            class="animated top-nav-text"
            @mouseover="addShake($event)"
            @mouseleave="removeShake($event)"
          >能源应用</a>
        </li>
        <li>
          <a
            href
            class="animated top-nav-text"
            @mouseover="addShake($event)"
            @mouseleave="removeShake($event)"
          >能源支撑</a>
        </li>
        <li>
          <a
            href
            class="animated top-nav-text"
            @mouseover="addShake($event)"
            @mouseleave="removeShake($event)"
          >发电侧应用</a>
        </li>
      </ul>
    </div>
    <div class="sidebar animated slideInLeft">
      <ul>
        <li>
          <a href>
            <img src="../../assets/img/sidebar-icon-01.png" alt>&nbsp;
          </a>
        </li>
        <li>
          <a href>
            <img src="../../assets/img/sidebar-icon-02.png" alt>&nbsp;
          </a>
        </li>
        <li>
          <a href>
            <img src="../../assets/img/sidebar-icon-03.png" alt>&nbsp;
          </a>
        </li>
        <li>
          <a href>
            <img src="../../assets/img/sidebar-icon-01.png" alt>&nbsp;
          </a>
        </li>
        <li>
          <a href>
            <img src="../../assets/img/sidebar-icon-02.png" alt>&nbsp;
          </a>
        </li>
        <li>
          <a href>
            <img src="../../assets/img/sidebar-icon-03.png" alt>&nbsp;
          </a>
        </li>
      </ul>
    </div>
    <div id="content" ref="content" class="content animated fadeInUp">
      <div class="index-logo">
        <div class="text-logo clearfix">
          <img class="pull-left" src="../../assets/img/content-logo.png" alt>
          <div>
            <span>
              <img src="../../assets/img/zhonghe-logo.png" alt>
            </span>
            <span>Intergarted Energy Intellgence Service Platform</span>
          </div>
        </div>
      </div>
      <div class="lf-col">
        <div class="fan-pattern-model">
          <span class="model-title">能耗概览</span>
          <ul class="fan-pattern-btn">
            <li :class="{active:fanPattern==1}" @click="fanPatternTab(1)">
              <button>本月</button>
            </li>
            <li :class="{active:fanPattern==2}" @click="fanPatternTab(2)">
              <button>本年</button>
            </li>
            <li :class="{active:fanPattern==3}" @click="fanPatternTab(3)">
              <button>累计</button>
            </li>
          </ul>
          <ul class="fan-pattern-resource">
            <li>
              <i class="iconfont icon-yuandianxiao"></i> 水 17099 t
            </li>
            <li>
              <i class="iconfont icon-yuandianxiao"></i> 电 17099 kwh
            </li>
            <li>
              <i class="iconfont icon-yuandianxiao"></i> 气 17099 nm3
            </li>
            <li>
              <i class="iconfont icon-yuandianxiao"></i> 热 17099 kwh
            </li>
          </ul>
          <div id="fanPatternCanvas"></div>
          <div class="fan-pattern-center">
            <div>198420</div>
            <p>Kgce</p>
          </div>
        </div>
        <div class="joop-model-bg">
          <span class="model-title">运维概览</span>
          <ul class="joop-model-cont">
            <li>
              <img src="../../assets/img/joop-model-icon-01.png" alt>
              <div>
                <p>本月运维客户数</p>
                <p>{{maintainSum}}</p>
              </div>
            </li>
            <li>
              <img src="../../assets/img/joop-model-icon-02.png" alt>
              <div>
                <p>增长率</p>
                <p>{{addRate}}%</p>
              </div>
            </li>
            <li>
              <img src="../../assets/img/joop-model-icon-03.png" alt>
              <div>
                <p>本月工单数</p>
                <p>{{maintainSum}}</p>
              </div>
            </li>
            <li>
              <img src="../../assets/img/joop-model-icon-04.png" alt>
              <div>
                <p>好评率</p>
                <p>{{goodRate}}%</p>
              </div>
            </li>
          </ul>
          <ul class="joop-model-center">
            <li>
              <img src="../../assets/img/joop-model-icon-center.png" alt>
            </li>
            <li>运维客户总数</li>
            <li>{{maintainSum}}</li>
          </ul>
        </div>
      </div>
      <div class="center-col">
        <div class="time-detection">
          <div class="time-detection-map">实时监测能耗地图</div>
          <div class="news-time">
            时间：
            <!-- <font color="#fcda07">2019/10/23 12:23</font> -->
            <font color="#fcda07">{{yearDateTime}}</font>
          </div>
          <ul class="hot-time-map">
            <li :class="{active:hotTime==1}" @click="hotTimeFun(1)">电</li>
            <li :class="{active:hotTime==2}" @click="hotTimeFun(2)">水</li>
            <li :class="{active:hotTime==3}" @click="hotTimeFun(3)">气</li>
            <li :class="{active:hotTime==4}" @click="hotTimeFun(4)">热</li>
          </ul>
        </div>
        <i v-show="mapTabData>1" class="iconfont icon-fanhui black-map-btn" @click="blackMapBtn">
          <span>&nbsp;返回上级</span>
        </i>
        <div id="huMap" class="hn-map">
          <div v-show="mapTabData==1" ref="HNmapElem" class="hn-map-div animated">
            <img :src="HNmapImg" alt>
            <Tooltip content="75,345,000" placement="top">
              <span class="HNmapImg-span" @click="mapTabData=2;reloadMap()"></span>
            </Tooltip>
          </div>
          <div v-show="mapTabData==2" class="cs-map-div animated rotateIn">
            <img :src="CSmapImg" alt>
            <span @click="mapTabData=3;reloadMap()"></span>
          </div>
          <div v-show="mapTabData==3" class="csCounty-map-div animated rotateIn">
            <img :src="CSCountymapImg" alt>
            <span></span>
          </div>
        </div>
      </div>
      <div class="rg-col">
        <div class="operate-about">
          <span class="operate-about-title">经营概况</span>
          <ul class="operate-about-btn">
            <li :class="{active:operateAboutBtn==1}">
              <button @click="operateProgess(1)">本月</button>
            </li>
            <li :class="{active:operateAboutBtn==2}">
              <button @click="operateProgess(2)">本年</button>
            </li>
            <li :class="{active:operateAboutBtn==3}">
              <button @click="operateProgess(3)">累计</button>
            </li>
          </ul>
          <div class="operate-about-progress">
            <ul>
              <li>
                <i class="iconfont icon-circle"></i> 总综合能源用户总数
              </li>
              <li>
                <i class="iconfont icon-circle"></i> 项目总数
              </li>
              <li>
                <i class="iconfont icon-circle"></i> 供应商总数
              </li>
            </ul>
            <Tooltip content="32100 总综合能源用户总数 / 312233 项目总数 / 4122 供应商总数" style="width: 100%">
              <Progress :percent="longVal" status="active" :success-percent="shortVal"/>
            </Tooltip>
          </div>
          <ul class="operate-about-canvas-tab">
            <li :class="{active:operateAbout==1}" @click="operateAboutFun(1)">本月</li>
            <li :class="{active:operateAbout==2}" @click="operateAboutFun(2)">本年</li>
          </ul>
          <div id="nestedRingCanvas"></div>
        </div>
        <div class="line-chart">
          <span class="line-chart-title">低压用户概况</span>
          <ul class="line-chart-resource">
            <li :class="{active:powerActive==1}" @click="addPower">低压新增用户</li>
            <li :class="{active:powerActive==2}" @click="monthPower">月电量分组</li>
          </ul>
          <div id="lineChartCanvas"></div>
        </div>
      </div>
    </div>
    <div class="footer-tip">
      国网湖南省电力有限公司版权所有 Copyright © 2018 State Grid Corporation of China,All Rights Reserved
      <div class="full-screen" @click="toggleFullScreen($event)">
        <img src="../../assets/img/full-screen-tab.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
import TWEEN from "@tweenjs/tween.js";
export default {
  name: "index",
  data() {
    return {
      zero: 0,
      maintainSum: 0,
      rate: 0,
      goodRate: 0,
      addRateZero: 0,
      addRate: 0,
      yearDateTime: "",
      timer: null,
      mapTabData: 1,
      longVal: 20,
      shortVal: 10,
      hotTime: 1,
      fanPattern: 1,
      operateAbout: 1,
      operateAboutBtn: 1,
      powerActive: 1,
      HNmapImg: require("../../assets/img/hunan-map.png"),
      CSmapImg: require("../../assets/img/cs-map.png"),
      CSCountymapImg: require("../../assets/img/cs-county-map.png")
    };
  },
  methods: {
    reloadMap() {
      let myChartOne = this.$echarts.init(
        document.getElementById("fanPatternCanvas")
      );

      let myChartTwo = this.$echarts.init(
        document.getElementById("nestedRingCanvas")
      );

      let myChartThree = this.$echarts.init(
        document.getElementById("lineChartCanvas"),
        "light"
      );
      myChartOne.clear();
      myChartTwo.clear();
      myChartThree.clear();
      this.numberAnimate();
      this.drawLine();
      this.nestedRing();
      this.lineChart();
    },
    blackMapBtn() {
      if (this.mapTabData > 1) {
        this.mapTabData -= 1;
        this.reloadMap();
      }
    },
    hotTimeFun(arg) {
      if (this.hotTime != arg) {
        this.hotTime = arg;
      }
    },
    operateProgess(arg) {
      if (this.operateAboutBtn != arg && this.longVal < 90) {
        this.operateAboutBtn = arg;
        this.longVal += 10;
        this.shortVal += 5;
      }
    },
    operateAboutFun(arg) {
      if (this.operateAbout != arg) {
        this.operateAbout = arg;
        let myChart = this.$echarts.init(
          document.getElementById("nestedRingCanvas")
        );
        myChart.clear();
        this.nestedRing();
      }
    },
    fanPatternTab(arg) {
      if (this.fanPattern != arg) {
        this.fanPattern = arg;
        let myChart = this.$echarts.init(
          document.getElementById("fanPatternCanvas")
        );
        myChart.clear();
        this.drawLine();
      }
    },
    addPower() {
      if (this.powerActive != 1) {
        this.powerActive = 1;
        let myChart = this.$echarts.init(
          document.getElementById("lineChartCanvas"),
          "light"
        );
        myChart.clear();

        this.lineChart();
      }
    },
    monthPower() {
      if (this.powerActive != 2) {
        this.powerActive = 2;
        let myChart = this.$echarts.init(
          document.getElementById("lineChartCanvas"),
          "light"
        );
        myChart.clear();
        this.lineChart();
      }
    },
    addShake(elem) {
      elem.target.classList.add("shake");
    },
    removeShake(elem) {
      elem.target.classList.remove("shake");
    },
    drawLine() {
      let myChart = this.$echarts.init(
        document.getElementById("fanPatternCanvas"),
        "light"
      );
      let option = null;
      option = {
        title: {
          x: "left"
        },
        toolbox: {
          show: false
        },
        calculable: true,
        color: ["#6054ff", "#f19610", "#34d160", "#0278e7"],
        series: [
          {
            name: "",
            type: "pie",
            radius: [30, 140],
            center: ["50%", "50%"],
            roseType: "area",
            label: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 10, name: "水" },
              { value: 5, name: "电" },
              { value: 15, name: "气" },
              { value: 25, name: "热" }
            ]
          }
        ]
      };
      myChart.setOption(option, true);
    },
    nestedRing() {
      let myChart = this.$echarts.init(
        document.getElementById("nestedRingCanvas"),
        "light"
      );
      let option = null;
      option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c}万元 ({d}%)"
        },
        color: ["#ffb548", "#31c55a", "#2187eb"],
        series: [
          {
            name: "",
            type: "pie",
            selectedMode: "single",
            radius: ["0", "40%"],
            label: {
              normal: {
                // position: "inner",

                fontSize: 12
              }
            },
            labelLine: {
              normal: {
                length: 20,
                zIndex: 1000
              }
            },
            data: [
              { value: 54785, name: "未收金额" },
              { value: 47850, name: "已收金额" }
            ]
          },
          {
            name: "",
            type: "pie",
            radius: ["40%", "55%"],
            selectedMode: "single",
            label: {
              normal: {
                formatter: " {b|{b}}",
                backgroundColor: "transparent",
                borderColor: "#aaa",
                padding: [0, 4],
                rich: {
                  c: {
                    fontSize: 12,
                    align: "center"
                  },
                  b: {
                    fontSize: 12,
                    align: "center"
                  }
                }
              }
            },
            data: [{ value: "23545", name: "合同金额" }]
          }
        ]
      };
      myChart.setOption(option, true);
    },
    lineChart() {
      let myChart = this.$echarts.init(
        document.getElementById("lineChartCanvas"),
        "light"
      );
      let option = null;
      option = {
        legend: {
          data: ["新增用户数", "环比"],
          itemWidth: 10,
          itemHeight: 5,
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#084c8b",
                width: "1"
              }
            },
            axisLabel: {
              textStyle: {
                color: "#caf1fd",
                fontSize: 12
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "新增用户数",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#caf1fd",
                fontSize: 12
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                type: "dashed",
                color: "#fff", //左边线的颜色
                width: "o" //坐标线的宽度
              }
            }
          },
          {
            type: "value",
            name: "百分比",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value}%",
              textStyle: {
                color: "#caf1fd",
                fontSize: 12
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#fff", //左边线的颜色
                width: "0" //坐标线的宽度
              }
            }
          }
        ],
        series: [
          {
            name: "新增用户数",
            type: "bar",
            barWidth: 12,
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "环比",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      };

      myChart.setOption(option, true);
    },
    toggleFullScreen(elem) {
      console.log(elem, 666);
      var el = document.documentElement;
      var isFullscreen =
        document.fullScreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen;
      if (!isFullscreen) {
        //进入全屏,多重短路表达式
        (el.requestFullscreen && el.requestFullscreen()) ||
          (el.mozRequestFullScreen && el.mozRequestFullScreen()) ||
          (el.webkitRequestFullscreen && el.webkitRequestFullscreen()) ||
          (el.msRequestFullscreen && el.msRequestFullscreen());
      } else {
        //退出全屏,三目运算符
        document.exitFullscreen
          ? document.exitFullscreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitExitFullscreen
          ? document.webkitExitFullscreen()
          : "";
      }
    },
    getDateTimeFun() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let day = new Date().getDate();
      let hours = new Date().getHours();
      let min = new Date().getMinutes();
      this.yearDateTime =
        year + "/" + month + "/" + day + " " + hours + ":" + min;
    },
    numberAnimate() {
      this.zero = 0;
      this.rate = 0;
      this.addRateZero = 0;
    },
    otherPage(arg) {
      // alert(1)
      this.$router.push(arg);
      return false;
    }
  },
  mounted() {
    this.$refs.content.addEventListener("animationend", () => {
      this.drawLine();
      this.nestedRing();
      this.lineChart();
      this.zero = 147565600;
      this.rate = 87.1;
      this.addRateZero = 0.234;
      this.$refs.HNmapElem.classList.add("rotateIn");
    });
    this.timer = setInterval(() => {
      this.getDateTimeFun();
    }, 1000);
  },
  created() {},
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  watch: {
    zero(newValue, oldValue) {
      new TWEEN.Tween({
        number: oldValue
      })
        .to(
          {
            number: newValue
          },
          1000
        )
        .onUpdate(tween => {
          this.maintainSum = tween.number.toFixed(0);
        })
        .start();
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }
      animate();
    },
    rate(newValue, oldValue) {
      new TWEEN.Tween({
        number: oldValue
      })
        .to(
          {
            number: newValue
          },
          1000
        )
        .onUpdate(tween => {
          this.goodRate = tween.number.toFixed(2);
        })
        .start();
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }
      animate();
    },
    addRateZero(newValue, oldValue) {
      new TWEEN.Tween({
        number: oldValue
      })
        .to(
          {
            number: newValue
          },
          1000
        )
        .onUpdate(tween => {
          this.addRate = tween.number.toFixed(3);
        })
        .start();
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }
      animate();
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/index.css";
#fanPatternCanvas {
  position: absolute;
  top: 100px;
  left: 50px;
  width: 350px;
  height: 350px;
}
/deep/ div.ivu-tooltip-inner {
  max-width: none;
}
#nestedRingCanvas {
  font-family: MicrosoftYaHei;
  position: absolute;
  top: 105px;
  right: 65px;
  width: 300px;
  height: 300px;
}
#lineChartCanvas {
  font-family: MicrosoftYaHei;
  position: absolute;
  top: 50px;
  right: 20px;
  width: 430px;
  height: 250px;
}
#huMap {
  width: 520px;
  height: 530px;
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-image: url("../../assets/img/hunan-map.png");
  background: url("../../assets/img/hunan-map-bg.png") no-repeat center center;
  background-size: 100% 100%;
  position: absolute;
  top: 157px;
  left: 20px;
  img {
    vertical-align: middle;
  }
  .hn-map-div {
    position: relative;
    // width: 520px;
    // height: 530px;
    // line-height: 530px;
    text-align: center;
    div.ivu-tooltip {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 150px;
      left: 393px;
    }
    .HNmapImg-span {
      position: absolute;
      top: -13px;
      left: 0;
      z-index: 2;
      width: 40px;
      height: 40px;
      background: url("../../assets/img/landmark-dot.png") no-repeat center
        center;
      background-size: 100% 100%;
      border-radius: 20px;
      &:hover {
        cursor: pointer;
        background: url("../../assets/img/landmark-dot-active.png") no-repeat
          center center;
      }
    }
  }
  .cs-map-div {
    position: relative;
    top: 100px;
    left: -70px;
    text-align: center;
    span {
      position: absolute;
      top: 64px;
      left: 338px;
      width: 40px;
      height: 40px;
      background: url("../../assets/img/landmark-dot.png") no-repeat center
        center;
      background-size: 100% 100%;
      border-radius: 20px;
      &:hover {
        cursor: pointer;
        background: url("../../assets/img/landmark-dot-active.png") no-repeat
          center center;
      }
    }
  }
  .csCounty-map-div {
    position: relative;
    top: 2px;
    left: -70px;
    text-align: center;
    span {
      width: 40px;
      height: 40px;
      background: url("../../assets/img/landmark-dot.png") no-repeat center
        center;
      background-size: 100% 100%;
      border-radius: 20px;
      &:hover {
        cursor: pointer;
        background: url("../../assets/img/landmark-dot-active.png") no-repeat
          center center;
      }
    }
  }
}
</style>