<template>
    <div class="bordered 发案趋势">
        <h2>发案趋势分析</h2>
        <div ref="chart" class="chart"/>
    </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';
  @Component
  export default class Chart3 extends Vue {
   mounted(){
     const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
     myChart.setOption(global.createEchartsOptions({
       legend: {
         bottom: global.px(10),
         textStyle: {color: 'white'},
         itemWidth: global.px(30),
         itemHeight: global.px(16)
       },
       grid: {
         x: global.px(20),
         x2: global.px(20),
         y:global.px(20),
         y2: global.px(70),
         containLabel: true
       },
       xAxis: {
         type: 'category',
         boundaryGap: false,
         data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
       series: [
         {
           name: '抢劫',
           type: 'line',
           data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
         },
         {
           name: '醉驾',
           type: 'line',
           data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
         },
         {
           name: '盗窃',
           type: 'line',
           data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
         },
         {
           name: '故意杀人',
           type: 'line',
           data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12].reverse()
         },
         {
           name: '故意伤人',
           type: 'line',
           data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13].reverse()
         }
       ].map(obj => ({
         ...obj,
         symbol: 'circle',
         symbolSize: global.px(12),
         lineStyle: {width: global.px(2)}
       }))
   }))

    }
}
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .发案趋势 {
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
