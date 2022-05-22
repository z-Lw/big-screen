<template>

        <div class="bordered 去向排名">
            <h2>应届生的去向</h2>
            <div ref="chart" class="chart"/>
            <div class="legend">
                <span class="first"/> 就业
                <span class="second"/> 考研
            </div>
        </div>


</template>

<script lang="ts">
    import * as echarts from 'echarts';
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import global from '@/global';
  @Component
  export default class Chart2 extends Vue {
    myChart:any
     data = [
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
      {name: '广东省', 2011: 2, 2012: 3},
    ]
     x(data: { name: string; 2011: number; 2012: number; }[]){
       this.myChart.setOption(global.createEchartsOptions({
         xAxis: {
           type: 'value',
           boundaryGap: [0, 0.01],
           splitLine: {show: false},
           axisLabel: {show: false}
         },
         yAxis: {
           axisTick: {show: false},
           type: 'category',
           data: data.map(i => i.name),

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
             data: data.map(i => i[2012]),
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
             data: data.map(i => i[2011]),
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
    mounted(){
        this.myChart = echarts.init(this.$refs.chart as HTMLDivElement);
        this.x(this.data)
      setInterval(()=>{
        const newData = [
          {name: '广东省', 2011: 2, 2012: Math.random() * 10},
          {name: '广东省', 2011: Math.random() * 10, 2012: Math.random() * 10},
          {name: '广东省', 2011: 2, 2012: Math.random() * 10},
          {name: '广东省', 2011: 2, 2012: Math.random() * 10},
          {name: '广东省', 2011: 2, 2012: Math.random() * 10},
          {name: '广东省', 2011: 2, 2012: Math.random() * 10},
          {name: '广东省', 2011: 2, 2012:Math.random() * 10},
          {name: '广东省', 2011: 2, 2012: Math.random() * 10},
          {name: '广东省', 2011: 2, 2012: Math.random() * 10},
        ];
        this.x(newData);
      },1000)
    }
  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';

    .去向排名 {
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
