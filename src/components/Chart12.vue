<template>
    <div class="年龄段-图1">
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
     colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
     data = [
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
mounted(){
  const {data,colors} =this
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
