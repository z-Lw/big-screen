<template>
  <div id="root">
      <div class="home">
          <header></header>
          <main>
            <section class="section1">
              <chart1/>
              <chart2/>
            </section>
            <section class="section2">
                <chart3/>
                <chart4/>
            </section>
            <section class="bordered section3">
                <chart5/>
            </section>
            <section class="bordered section4">
                <chart6/>
                <div class="bordered 年龄">
                    <h2>犯罪人员年龄段分布</h2>
                    <div class="charts">
                        <chart7/>
                        <chart8/>
                        <chart9/>
                    </div>
                </div>
            </section>
              <section class="section5">
                  <div class="bordered row1 案发类型">
                      <h2>案发类型统计</h2>
                      <div class="charts">
                          <chart10/>
                          <chart11/>
                      </div>
                  </div>
                  <div class="bordered row2 案发街道">
                      <h2>案发街道统计</h2>
                      <div class="charts">
                          <chart12/>
                          <chart13/>
                      </div>
                  </div>
                  <div class="bordered row3 作案手段">
                      <h2>作案手段分析</h2>
                      <chart14/>
                  </div>
              </section>
          </main>
          <footer>
            {{`${year}-${mouth}-${day}`}}
          </footer>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import global from '../global';
import chart1 from '../components/Chart1.vue'
import chart2 from '../components/Chart2.vue'
import chart3 from '../components/Chart3.vue'
import chart4 from '../components/Chart4.vue'
import chart5 from '../components/Chart5.vue'
import chart6 from '../components/Chart6.vue'
import chart7 from '../components/Chart7.vue'
import chart8 from '../components/Chart8.vue'
import chart9 from '../components/Chart9.vue'
import chart10 from '../components/Chart10.vue'
import chart11 from '../components/Chart11.vue'
import chart12 from '../components/Chart12.vue'
import chart13 from '../components/Chart13.vue'
import chart14 from '../components/Chart14.vue'

@Component({
  components: {chart1,chart2,chart3,chart4,chart5,chart6,chart7,chart8,chart9,chart10,chart11,chart12,chart13,chart14},
})
export default class HomeView extends Vue {
  year = new Date().getFullYear();
  mouth =new Date().getMonth()
  day = new Date().getDay()
mounted(){
  const string = `<style>html{
    font-size: ${global.pageWidth/100}px;
}</style>`
  document.write(string)
  let root :HTMLDivElement |null
  root=document.querySelector('#root')
  if(root){
    // root.style.width=global.pageWidth+'px'
    root.style.height=global.pageHeight+'px'
    root.style.marginTop =(document.documentElement.clientHeight - global.pageHeight ) / 2 + 'px'
  }
}
}
</script>
<style lang="scss" >
@import '../index.scss';
.home{
  display: flex;
  flex-direction: column;
  flex:1;
  background: #010310;
  color: white;
  font-size: px(16);
 header{
   height: px(99);
   border: 1px solid red;
   background-size: cover;
   width: px(2420);
   margin: 0 auto;
 }
  > footer {
    height: px(68);
    border: 1px solid #0d2d59;
    margin: px(20) 0 1px;
    border-radius: 4px;
    background: #0c0d2b;
    display: flex;
    align-items: center;
    justify-content: center;
 }
  > main {
    flex: 1;
    width: px(2420);
    margin: 0 auto;
    padding-top: px(30);
    display: grid;
    grid-template:
            "box1 box2 box4 box5" 755fr
            "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;
    grid-column-gap: px(28);
    grid-row-gap: px(28);
    > section { text-align: center;}
      .bordered{
          border: 1px solid #0764bc;
          border-radius: 4px;
          position: relative;
          box-shadow: 0 0 2px 0 #0e325f, inset 0 0 2px 0 #0e325f;
          background: #0c1139;
          &::before {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
              border-radius: 4px;
              box-shadow: 17px 0 0 -16px #0e325f,
              -17px 0 0 -16px #0e325f,
              0 17px 0 -16px #0e325f,
              0 -17px 0 -16px #0e325f,
              9px 0 0 -8px #0d4483,
              -9px 0 0 -8px #0d4483,
              0 9px 0 -8px #0d4483,
              0 -9px 0 -8px #0d4483,;
          }
      }
    > .section1 {
      grid-area: box1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    > .section2 {
      grid-area: box2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    > .section3 {
      grid-area: box3;
    }
    > .section4 {
        grid-area: box4;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    > .section5 {
      grid-area: box5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > .row1 {
            height: px(317);
        }
        > .row2 {
            height: px(317);
        }
        > .row3 {
            height: px(455);
        }
    }
      .年龄, .案发类型, .案发街道, .作案手段 {
          height: px(363);
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

          .charts {
              width: 100%;
              flex: 1;
              display: flex;
              padding: px(30);
          }
      }
      .作案手段 {
          padding: 0 px(24);
      }
}
}


</style>
