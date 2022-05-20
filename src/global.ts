const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight
let pageWidth: string | number|any
pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
const pageHeight = pageWidth/(16/9)
const px=(n: number)=>{
  return n / 2420 * pageWidth;
}
const baseEchartOptions = {

  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(40),
    y: px(40),
    x2: px(40),
    y2: px(40),
  },
};
const createEchartsOptions = (options :any) => {
  const result = {
    ...baseEchartOptions,
    ...options,
  };
  if (!(options?.xAxis?.axisLabel?.fontSize)) {
    result.xAxis = result.xAxis || {};
    result.xAxis.axisLabel = result.xAxis.axisLabel || {};
    result.xAxis.axisLabel.fontSize = px(12);
  }
  if (!(options?.yAxis?.axisLabel?.fontSize)) {
    result.yAxis = result.yAxis || {};
    result.yAxis.axisLabel = result.yAxis.axisLabel || {};
    result.yAxis.axisLabel.fontSize = px(12);
  }
  return result;
};
export default {
  pageWidth,pageHeight,px,baseEchartOptions,createEchartsOptions
}
