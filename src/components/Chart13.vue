<template>
    <div ref="chart" class="chart">

    </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';

  @Component
  export default class Chart13 extends Vue {
mounted(){
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
  const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
  myChart.setOption(global.createEchartsOptions({
    xAxis: {
      data: data.map(i => i.name),
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
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

    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        formatter(value: number) {
          return (value * 100).toFixed(0) + '%';
        }
      }
    },
    series: [{
      type: 'bar',
      data: data.map(i => i.value),
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
