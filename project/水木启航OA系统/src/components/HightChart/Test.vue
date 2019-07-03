<template>
  <div id="app">
    <div class="box">
      <highcharts-component :options="options" :styles="styles"></highcharts-component>
    </div>  
</div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
import Highmaps from 'highcharts/modules/map';
import $ from 'jquery'
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);
import HighchartsComponent from './HighchartsComponent.vue';
export default {
    props: [ 'title', 'data' ],
    name: 'app',
    data() {
        return {
            stockChart: null,
            type: 'columnrange',
            options: {
                  chart: {
                    type: 'column'
                  },
                  title: {
                    text: '公司日出勤报表'
                  },
                  xAxis: {
                    type: 'category',
                    labels: {
                      rotation: 0
                    }
                  },
                  yAxis: {
                    min: 0,
                    title: {
                      text: ''
                    }
                  },
                  legend: {
                    enabled: false
                  },
                  tooltip: {
                    pointFormat: '<b>{point.y:.0f}</b>'
                  },
                  series: [{
                    colorByPoint: true,
                    // name: '总人口',
                    data: [
                      ['请假', 1],
                      ['迟到', 2],
                      ['早退', 3],
                      ['矿工', 4],
                      ['正常', 5]
                    ],
                    dataLabels: {
                      enabled: true,
                      rotation: 0,
                      color: '#000',
                      align: 'center',
                      format: '{point.y:.0f}', // :.1f 为保留 1 位小数
                      y: 10
                    }
                  }]
                
            },
            styles: {
              width: 500,
              height: 300
            }
        }
    },
    components: {
      HighchartsComponent
    },
    updated() {
      this.options.title.text = this.title;
      this.options.series[0].data = this.data;
    },
    created() {
      // console.log(this.personaltitle1);
      // console.log(this.options.series[0].data);
      this.options.title.text = this.title;
      this.options.series[0].data = this.data
    }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.box {
  width: 100%;
  height: 300px;
  display: inline-block;
  // border: 1px solid #ccc;
  overflow: hidden;
  // position: relative;

  h3 {
    position: absolute;
    top: -10px;
    left: 10px;
    z-index: 1000;
  }
}
</style>
