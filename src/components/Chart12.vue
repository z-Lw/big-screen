<template>
    <div class="chart12">
        <div class="chart">
            <div class="main" ref="chart"/>
            </div>
        </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';

  @Component
  export default class chart12 extends Vue {
     data = [
      {value: 0.08, name: '计算机'},
      {value: 0.06, name: '数学'},
      {value: 0.11, name: '文学'},
      {value: 0.09, name: '英语'},
      {value: 0.12, name: '音乐'},
      {value: 0.06, name: '美术'},
      {value: 0.08, name: '体育'},
    ];
mounted(){
  const {data} =this
  const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
  myChart.setOption(global.createEchartsOptions({
    xAxis: {show: false},
    yAxis: {show: false},
    grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'center',
      textStyle: {color: 'white'},
      itemWidth: global.px(10),
      itemHeight: global.px(10),
      formatter(name: string) {
        const value =  data.find(i => i.name === name)!.value * 100 + '%';
        return name + ' ' + value;
      }
    },
    series: [
      {
        center: ['60%', '50%'],
        type: 'pie',
        radius: '80%',
        label: {show: false},
        labelLine: {show: false},
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }));
}
  }
</script>

<style lang="scss" scoped>
    .chart12 {
        flex: 1;
        display: flex;
        flex-direction: column;
        .chart {
            position: relative;
            display: flex;
            flex: 1;
            width: 100%;
            > .main {
                flex: 1;
            }
        }
    }
</style>
