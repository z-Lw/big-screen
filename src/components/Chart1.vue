<template>

        <div class="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div  class="chart" ref="chart">

            </div>
        </div>


</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';
  @Component
  export default class Chart1 extends Vue {

    mounted(){
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
      myChart.setOption({
        textStyle: {
          fontSize: global.px(12),
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
            fontSize: global.px(12),
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
          x:global.px(40) ,
          y: global.px(40),
          x2: global.px(40),
          y2: global.px(40),
        },
        yAxis: {
          splitLine: {show: false},
          axisLine: {
            show: true,
            lineStyle: {color: '#083B70'}
          },
          axisLabel: {
            fontSize: global.px(12)
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
</style>
