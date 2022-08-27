import { Component, OnInit, Input } from '@angular/core';
import * as echarts from 'echarts';
import { ICovidState } from 'src/app/interfaces/iCovidState';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() data: Array<ICovidState> = [];
  public dataChart = [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];


  ngOnInit(): void {
    this.createChart();
  }

  public createChart() {
    this.updateDataChart();

    var chartDom = document.getElementById('bar')!;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      // title: {
      //   text: 'World Population'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: [
          'AC',
          'AL',
          'AM',
          'AP',
          'BA',
          'CE',
          'DF',
          'ES',
          'GO',
          'MA',
          'MG',
          'MS',
          'MT',
          'PA',
          'PB',
          'PE',
          'PI',
          'PR',
          'RJ',
          'RN',
          'RO',
          'RR',
          'RS',
          'SC',
          'SE',
          'SP',
          'TO'
        ]
      },
      series: [
        {
          name: 'Casos',
          type: 'bar',
          data: this.dataChart,
        }
      ]
    };

    option && myChart.setOption(option);
  }
  
  public updateDataChart(): void {
    this.dataChart[0].value = this.data[this.data.length - 28].cases
    this.dataChart[1].value = this.data[this.data.length - 27].cases
    this.dataChart[2].value = this.data[this.data.length - 26].cases
    this.dataChart[3].value = this.data[this.data.length - 25].cases
    this.dataChart[4].value = this.data[this.data.length - 24].cases
    this.dataChart[5].value = this.data[this.data.length - 23].cases
    this.dataChart[6].value = this.data[this.data.length - 22].cases
    this.dataChart[7].value = this.data[this.data.length - 21].cases
    this.dataChart[8].value = this.data[this.data.length - 20].cases
    this.dataChart[9].value = this.data[this.data.length - 19].cases
    this.dataChart[10].value = this.data[this.data.length - 18].cases
    this.dataChart[11].value = this.data[this.data.length - 17].cases
    this.dataChart[12].value = this.data[this.data.length - 16].cases
    this.dataChart[13].value = this.data[this.data.length - 15].cases
    this.dataChart[14].value = this.data[this.data.length - 14].cases
    this.dataChart[15].value = this.data[this.data.length - 13].cases
    this.dataChart[16].value = this.data[this.data.length - 12].cases
    this.dataChart[17].value = this.data[this.data.length - 11].cases
    this.dataChart[18].value = this.data[this.data.length - 10].cases
    this.dataChart[19].value = this.data[this.data.length - 9].cases
    this.dataChart[20].value = this.data[this.data.length - 8].cases
    this.dataChart[21].value = this.data[this.data.length - 7].cases
    this.dataChart[22].value = this.data[this.data.length - 6].cases
    this.dataChart[23].value = this.data[this.data.length - 5].cases
    this.dataChart[24].value = this.data[this.data.length - 4].cases
    this.dataChart[25].value = this.data[this.data.length - 3].cases
    this.dataChart[26].value = this.data[this.data.length - 2].cases


  }



}


// "AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"