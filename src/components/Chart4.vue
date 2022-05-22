<template>
    <div class="bordered 出国留学">
        <h2>出国留学</h2>
        <div ref="chart" class="chart"/>
    </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';
  @Component
  export default class Chart4 extends Vue {
    mounted(){
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
      myChart.setOption(global.createEchartsOptions({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
          splitLine: {show: true, lineStyle: {color: '#073E78'}},
          axisTick: {show: false},
          axisLine: {show: false},
        },
        yAxis: {
          type: 'value',
          splitLine: {lineStyle: {color: '#073E78'}},
          axisLabel: {
            formatter(val: number) {
              return val * 100 + '%';
            }
          }
        },
        series: [{
          name: '出国留学',
          type: 'line',
          data: [
            0.15, 0.13, 0.11,
            0.13, 0.14, 0.15,
            0.16, 0.18, 0.21,
            0.19, 0.17, 0.16,
            0.15
          ],
          symbol: 'circle',
          symbolSize: global.px(12),
          lineStyle: {width: global.px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#414a9f'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          }
        }]
      }));
    }
  }
</script>

<style lang="scss" >
    @import '../index.scss';
    .出国留学 {
        height:px(363);
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
