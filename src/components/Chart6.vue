<template>
    <div class="bordered 籍贯">
        <h2>全市犯罪人员籍贯分布地</h2>
        <div class="wrapper">
            <div ref=chart class="chart"/>
            <div class="legend bordered">
                <span class="icon" :style="{background: colors['甘肃省']}"/>甘肃籍
                <span class="icon " :style="{background: colors['四川省']}"/>四川籍
                <span class="icon"  :style="{background: colors['青海省']}"/>青海籍
            </div>
            <div class="notes">此地图仅显示了中国的部分区域</div>
        </div>

    </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import * as echarts from 'echarts';
  import global from '@/global';
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const  china = require( '../geo/china.json')
  @Component
  export default class Chart6 extends Vue {
    colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
    mounted(){
      let { colors } = this
      const myChart = echarts.init(this.$refs.chart as HTMLDivElement);
        echarts.registerMap('CN', china);
        myChart.setOption(global.createEchartsOptions({
          xAxis: {show: false},
          yAxis: {show: false},
          series: [
            {
              type: 'map',
              mapType: 'CN', // 自定义扩展图表类型
              data: [
                {name: '甘肃省', value: 1},
              ],
              label: {show: false, color: 'white'},
              itemStyle: {
                areaColor: '#010D3D',
                color: colors['甘肃省'],
                borderColor: '#01A7F7',
                emphasis: {
                  label: {color: 'white'},
                  areaColor: '#5470C6',
                },
              }
            },
            {
              type: 'map',
              mapType: 'CN', // 自定义扩展图表类型
              data: [
                {name: '四川省', value: 100},
              ],
              itemStyle: {
                areaColor: '#010D3D',
                color: colors['四川省'],
                borderColor: 'yellow',
                emphasis: {
                  label: {color: 'white'},
                  areaColor: '#5470C6',
                },
              }
            },
            {
              type: 'map',
              mapType: 'CN', // 自定义扩展图表类型
              data: [
                {name: '青海省', value: 100},
              ],
              itemStyle: {
                areaColor: '#010D3D',
                color: colors['青海省'],
                borderColor: '#01A7F7',
                emphasis: {
                  label: {color: 'white'},
                  areaColor: '#5470C6',
                },
              }
            },

          ]
        }));
    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .籍贯 {
        height: px(753);
        background: transparent;
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
        > .wrapper {
            position: relative;
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            .chart {
                flex: 1;
            }
            .legend {
                position: absolute;
                top: px(40);
                left: px(20);
                display: flex;
                align-items: center;
                font-size: px(22);
                padding: px(20) px(10) px(20) 0;
                border-radius: 0;
                .icon {
                    margin: 0 px(10);
                    display: inline-block;
                    width: px(16);
                    height: px(16);
                    border-radius: 50%;
                    background: #1cecd9;
                }
            }
            .notes{
                position: absolute;
                bottom: px(10);
                right: px(10);
            }
        }
    }

</style>
