<template>
    <div class="年龄段-图1">
        <div class="chart">
            <div class="main" ref="chart"/>
            </div>
            <div class="legend">
                <span :style="{background: colors[0]}" />刑事
                <span :style="{background: colors[1]}" />民事
                <span :style="{background: colors[2]}"/>经济
                <span :style="{background: colors[3]}" />其他
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
              {value: 0.36, name: '刑事案件'},
              {value: 0.20, name: '民事案件'},
              {value: 0.18, name: '经济案件'},
              {value: 0.24, name: '其他案件'},
            ]
          }
        ]
      }));
    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .年龄段-图1 {
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
