<template>
  <div class="home" id="root" >
    <header></header>
    <main>
      <section class="section1">
        <div class="bordered 管辖统计">
          <h2>案发派出所管辖统计</h2>
          <div  class="chart" ref="chart">

          </div>
        </div>
      </section>
      <section class="bordered section2"></section>
      <section class="bordered section3"></section>
      <section class="bordered section4"></section>
      <section class="bordered section5"></section>
    </main>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import * as echarts from 'echarts';
const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight
let pageWidth: string | number|any
pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
const pageHeight = pageWidth/(16/9)
@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {


  px(n: number){
    return n / 2420 * pageWidth;
  }
mounted(){
  const string = `<style>html{
    font-size: ${pageWidth/100}px;
}</style>`
  document.write(string)
  let root :HTMLDivElement |null
  root=document.querySelector('#root')
  if(root){
    root.style.width=pageWidth+'px'
    root.style.height=pageHeight+'px'
    root.style.marginTop =(clientHeight - pageHeight ) / 2 + 'px'
  }

  const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
  myChart.setOption({
    textStyle: {
      fontSize: this.px(12),
      color: '#79839E'
    },
    title: {show: false},
    legend: {show: false},
    xAxis: {
      data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        fontSize: this.px(12),
        formatter(val: string) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },
    grid: {
      x:this.px(40) ,
      y: this.px(40),
      x2: this.px(40),
      y2: this.px(40),
    },
    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        fontSize: this.px(12)
      }
    },
    series: [{
      type: 'bar',
      data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
    }]
  });
}
}
</script>
<style lang="scss" scoped>
@import '../index.scss';
.home{
  display: flex;
  flex-direction: column;
  background: #010310;
  color: white;

 header{

   height: px(315);
   border: 1px solid red;
 }
  > main {
    flex: 1;
    padding-top: px(30);
    display: grid;
    grid-template:
            "box1 box2 box4 box5" 755fr
            "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;
    grid-column-gap: px(28);
    grid-row-gap: px(28);
    > section { text-align: center;}
      .bordered{
      border: 1px solid #0764bc;
      border-radius: 4px;
      position: relative;
      box-shadow: 0 0 2px 0 #0e325f, inset 0 0 2px 0 #0e325f;
      background: #0c1139;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        border-radius: 4px;
        box-shadow: 17px 0 0 -16px #0e325f,
        -17px 0 0 -16px #0e325f,
        0 17px 0 -16px #0e325f,
        0 -17px 0 -16px #0e325f,
        9px 0 0 -8px #0d4483,
        -9px 0 0 -8px #0d4483,
        0 9px 0 -8px #0d4483,
        0 -9px 0 -8px #0d4483,;
      }
    }
    > .section1 {
      grid-area: box1;

    }
    > .section2 {
      grid-area: box2;

    }
    > .section3 {
      grid-area: box3;

    }
    > .section4 {
      grid-area: box4;

    }
    > .section5 {
      grid-area: box5;

    }
    .管辖统计 {
      height: px(315);
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        flex-shrink: 0;
        border: 1px solid #0a5299;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        font-size: px(22);
        line-height: px(24);
        padding: px(10) px(28);
        text-shadow: 0 0 px(3) white;
      }
      .chart{
        flex: 1;
        width: 100%;
      }
    }
  }
}
</style>
