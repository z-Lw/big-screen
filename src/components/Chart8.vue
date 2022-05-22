<template>
    <div class="去向">
        <div class="chart">
            <div class="main" ref="chart"/>
                <div class="text">去向</div>
        </div>
        <div class="legend">
            <span :style="{background: colors[0]}" />考研
            <span :style="{background: colors[1]}" />考公
            <span :style="{background: colors[2]}" />就业
            <span :style="{background: colors[3]}"/> 创业
            <span :style="{background: colors[4]}" />其他
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';
  @Component
  export default class Chart8 extends Vue {
    colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
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
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'inside', textStyle: {color: 'white', fontSize: global.px(20)},
              formatter(options: { value: number; }) {
                return (options.value * 100).toFixed(0) + '%';
              }
            },
            labelLine: {show: false},
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: global.px(4)
            },
            data: [
              {value: 0.07, name: '考研'},
              {value: 0.10, name: '考公'},
              {value: 0.23, name: '就业'},
              {value: 0.28, name: '创业'},
              {value: 0.32, name: '其他'},
            ]
          }
        ]
      }));
    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .去向 {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: px(290);
        flex-shrink: 0;
        .legend {
            height: px(40);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            padding-right: px(10);
            > span {
                display: inline-block;
                width: px(16);
                height: px(10);
                border-radius: px(2);
                margin: 0 px(10);}
            .male {background: #33a4fa;}
            .female {background: #8d70f8;}
        }
        .chart {
            position: relative;
            display: flex;
            justify-content: center;
            flex: 1;
            width: 100%;
            > .main {
                flex: 1;
            }
            > .text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #33a4fa;
                font-size: px(40);
                text-shadow: 0 0 px(20) #33a4fa;
                font-weight: bold;
            }
        }
    }

</style>
