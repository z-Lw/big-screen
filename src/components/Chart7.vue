<template>
    <div class="性别">
        <div class="chart">
            <div class="main" ref="chart" />
            <div class="text">性别</div>
         </div>
        <div class="legend">
            <span class="male"/>男
            <span class="female"/>女
        </div>
        </div>


</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';

  @Component
  export default class Chart7 extends Vue {
    mounted(){
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
      myChart.setOption(global.createEchartsOptions({
        color: ['#8D70F8', '#33A4FA'],
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
                return options.value * 100 + '%';
              }
            },
            labelLine: {show: false},
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: global.px(4)
            },
            data: [
              {value: 0.6, name: '女'},
              {value: 0.4, name: '男'},
            ]
          }
        ]
      }));

    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
        .性别 {
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
                .male {background: #33a4fa;}
                .female {background: #8d70f8;}
            }
        }




</style>
