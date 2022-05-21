<template>
    <div class="年龄段-图2">8
        <div ref=chart class="chart">

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

  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .年龄段 {
        display: flex;
        flex-direction: column;
        height: px(363);
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
        > .charts {
            width: 100%;
            flex: 1;
            display: flex;
            padding: px(30);
        }
        &-图2 {
            flex: 1;
            border: 1px solid red;
            display: flex;
            flex-direction: column;
        }
    }
</style>
