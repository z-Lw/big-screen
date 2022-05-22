<template>
    <div ref="chart" class="chart"/>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';

  @Component
  export default class Chart10 extends Vue {
    mounted(){
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
      myChart.setOption(global.createEchartsOptions({
        xAxis: {
          data: ['985', '211', '双一流', '双非', '二本'],
          axisTick: {show: false},
          axisLine: {
            lineStyle: {color: '#083B70'}
          },
        },

        yAxis: {
          splitLine: {show: false},
          axisLine: {
            show: true,
            lineStyle: {color: '#083B70'}
          }
        },
        series: [{
          type: 'bar',
          data: [40, 22, 20, 18, 32],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0A97FB'
          }, {
            offset: 1,
            color: '#1E34FA'
          }]),
        }]
      }));

    }
  }
</script>

<style lang="scss" scoped>
    .chart{
        flex: 1;
        width: 100%;
    }
</style>
