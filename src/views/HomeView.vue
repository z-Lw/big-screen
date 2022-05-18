<template>
  <div class="home" id="id" ref="id">


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
const clientWidth = document.documentElement.clientWidth
const clientHeight =document.documentElement.clientHeight
let pageWidth: string | number
pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
const pageHeight = pageWidth/(16/9)
const string = `<style>html{
    font-size: ${pageWidth/100}px;
}</style>`
document.write(string)
@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
mounted(){
  let id :HTMLDivElement |null
  id=document.querySelector('#id')
  if(id){
    id.style.width=pageWidth+'px'
    id.style.height=pageHeight+'px'
  }

}

}
</script>
