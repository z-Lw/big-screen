<template>
    <div class="创业">
        <h3>创业趋势图</h3>
        <div ref="chart" class="chart">
        </div>
    </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';
  @Component
  export default class Chart9 extends Vue {
    mounted(){
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
      myChart.setOption(global.createEchartsOptions({
        color: '#F7A110',
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 18, 28, 38, 48, 58, 68, 78],
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
          type: 'line',
          data: [
            0.19, 0.20, 0.26,
            0.35, 0.26, 0.20,
            0.08, 0.06
          ],
          symbol: 'circle',
          symbolSize: global.px(12),
          lineStyle: {width: global.px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#F7A110'
            }, {
              offset: 1,
              color: '#1B1D52'
            }]),
          }
        }]
      }));
    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .创业 {
        border: 1px solid #08397d;
        flex: 1;
        display: flex;
        position: relative;
        flex-direction: column;
        > .chart {
            flex: 1;
            width: 100%;
        }
        h3 {
            font-size: px(20);
            color: #7ab6db;
            margin-top: px(6);
        }
    }
</style>
