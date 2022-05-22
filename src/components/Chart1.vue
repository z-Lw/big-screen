<template>
        <div class="bordered 统计">
            <h2>应届生人数统计</h2>
            <div  class="chart" ref="chart">
            </div>
        </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '../global';
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
    .统计 {
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

</style>
