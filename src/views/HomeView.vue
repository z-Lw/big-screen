<template>
  <div id="root">
      <div class="home">
          <header></header>
          <main>
            <section class="section1">
              <chart1/>
              <chart2/>
            </section>
            <section class="bordered section2"></section>
            <section class="bordered section3"></section>
            <section class="bordered section4"></section>
            <section class="bordered section5"></section>
          </main>
          <footer>
            {{`${year}-${mouth}-${day}`}}
          </footer>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import global from '@/global';
import chart1 from '../components/Chart1.vue'
import chart2 from '../components/Chart2.vue'

@Component({
  components: {chart1,chart2},
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
<style lang="scss" scoped>
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

    > .section1 {
      grid-area: box1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    > .section2 {
      grid-area: box2;

    }
    > .section3 {
      grid-area: box3;

    }
    > .section4 {
      grid-area: box4;

    }
    > .section5 {
      grid-area: box5;

    }
  }
}
</style>
