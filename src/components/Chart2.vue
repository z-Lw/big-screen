<template>

        <div class="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref=chart class="chart"/>
            <div class="legend">
                <span class="first"/> 破案排名1
                <span class="second"/> 破案排名2
            </div>
        </div>


</template>

<script lang="ts">
  import * as echarts from 'echarts';
import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
import global from '@/global';
  @Component
  export default class Chart2 extends Vue {
    mounted(){
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
      myChart.setOption(global.createEchartsOptions({
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {show: false},
          axisLabel: {show: false}
        },
        yAxis: {
          axisTick: {show: false},
          type: 'category',
          data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
            '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
          axisLabel: {
            formatter(val: string) {
              return val.replace('公安局', '\n公安局');
            }
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '8%',
          top:'8%',
          containLabel: true
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#2034f9'
                }, {
                  offset: 1,
                  color: '#04a1ff'
                }]),
              }
            }
          },
          {
            name: '2012年',
            type: 'bar',
            data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#b92ae8'
                }, {
                  offset: 1,
                  color: '#6773e7'
                }]),
              }
            }
          }
        ]
      }));

    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';

    .破获排名 {
        height: px(423);
        display: flex;
        flex-direction: column;
        position: relative;
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
        .chart {
            flex: 1;
            width: 100%;

        }
        .legend {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            padding: 0 px(20) px(10);
            > .first, > .second {
                display: inline-block;
                width: px(18); height: px(12);
                background: red; margin: 0 px(10);
            }
            .first {
                background: linear-gradient(90deg, #2034f9 0%, #04a1ff 100%);
            }
            .second {
                background: linear-gradient(90deg, #b92ae8 0%, #6773e7 100%);
            }
        }
    }

</style>
