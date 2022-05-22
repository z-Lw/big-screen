<template>
    <div class="chart11">
        <div class="chart">
            <div class="main" ref="chart"/>
            </div>
            <div class="legend">
                <span :style="{background: colors[0]}" />985
                <span :style="{background: colors[1]}" />211
                <span :style="{background: colors[2]}"/>双非
                <span :style="{background: colors[3]}" />二本
            </div>
        </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';

  @Component
  export default class Chart11 extends Vue {
    colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    mounted(){
      const {colors} = this
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
      myChart.setOption(global.createEchartsOptions({
        color: colors,
        xAxis: {show: false},
        yAxis: {show: false},
        legend: {show: false},
        series: [
          {
            startAngle: -20,
            type: 'pie',
            radius: ['25%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'outside', textStyle: {color: 'white', fontSize: global.px(20)},
              distanceToLabelLine: 0,
              formatter(options: { value: number; }) {
                return options.value * 100 + '%';
              }
            },
            labelLine: {show: true, length: 0},
            roseType: 'area',
            itemStyle: {
              shadowBlur: global.px(200),
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            data: [
              {value: 0.36, name: '985'},
              {value: 0.20, name: '211'},
              {value: 0.18, name: '双非'},
              {value: 0.24, name: '二本'},
            ]
          }
        ]
      }));
    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .chart11 {
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
        .legend {
            height: px(40);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            padding-right: px(10);
            > span {
                display: inline-block;
                width: px(40);
                height: px(20);
                border-radius: px(4);
                margin: 0 px(10);
            }

        }
    }
</style>
