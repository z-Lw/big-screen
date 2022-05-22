<template>
    <table>
        <thead>
        <tr>
            <th colSpan="2">专业</th>
            <th>人数</th>
            <th>总计</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td rowSpan="4">计算机</td>
            <td>计算机科学</td>
            <td>10</td>
            <td rowSpan="4">80</td>
        </tr>
        <tr>
            <td>软件工程</td>
            <td>20</td>
        </tr>
        <tr>
            <td>网络工程</td>
            <td>20</td>
        </tr>
        <tr>
            <td>物联网</td>
            <td>30</td>
        </tr>
        <tr>
            <td rowSpan="2">英语</td>
            <td>英语师范</td>
            <td>22</td>
            <td rowSpan="2">44</td>
        </tr>
        <tr>
            <td>翻译</td>
            <td>22</td>
        </tr>
        <tr>
            <td rowSpan="3">数学</td>
            <td>数学师范</td>
            <td>40</td>
            <td rowSpan="3">68</td>
        </tr>
        <tr>
            <td>应用学</td>
            <td>22</td>
        </tr>
        <tr>
            <td>统计学</td>
            <td>45</td>
        </tr>
        <tr>
            <td rowSpan="2">文学</td>
            <td>语文师范</td>
            <td>32</td>
            <td rowSpan="2">102</td>
        </tr>
        <tr>
            <td>文言文学</td>
            <td>80</td>
        </tr>
        </tbody>
    </table>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Chart14 extends Vue {

  }
</script>

<style lang="scss" scoped>
    @import '../index.scss';
        table {
            width: 100%;
            table-layout: fixed;
            margin-top: px(25);
            border-collapse: collapse;
            th, td {
                border: 1px solid #1a3671;
            }
            thead {
                th {
                    height: px(70);
                    box-shadow: inset 0 0 px(60) 0 #1f3d85;
                }
            }
            tbody {
                td {
                    height: px(26);
                    width: px(84);
                    background: #1c2456;
                }

            }
        }

</style>
