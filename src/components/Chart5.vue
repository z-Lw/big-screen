<template>
    <div class="结果">
        <h2>往年应届生对比</h2>
        <table>
            <thead>
            <tr>
                <th>年份</th><th>考研</th><th>就业</th><th>创业</th><th>出国留学</th>
                <th>考公</th><th>其他</th><th>合计</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>2015</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
            </tr>
            <tr>
                <td>2016</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
            </tr>
            <tr>
                <td>2017</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Chart5 extends Vue {

  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
    .结果 {
        height: px(315);
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
        > table {
            margin-top: px(38);
            border-collapse: collapse;
            th, td {
                border: 1px solid #1a3671;
            }
            thead {
                th {
                    height: px(70);
                    box-shadow: inset 0 0 px(60) 0 #1f3d85;
                    white-space: nowrap;
                    padding: 0 3px;
                }
            }
            tbody {
                td {
                    height: px(50);
                    width: px(85);
                    background: #1c2456;
                }
            }
        }
    }
</style>
