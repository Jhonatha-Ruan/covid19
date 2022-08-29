import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ICovidState } from 'src/app/interfaces/iCovidState';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  @Input() data: Array<ICovidState> = [];
  public dataChart = [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];

  public dataChart2 = [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];

  public dataChart3 = [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];

  public dataChart4 = [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];

  public dataChart5 = [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];

  public dataChart6 = [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];



  ngOnInit(): void {
    this.createChart();
  }

  public createChart() {
    this.updateDataChart();

    var chartDom = document.getElementById('area')!;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      color: ['#5470c6', '#3ba272', '#fac858', '#fc8452', '#73c0de', '#ea7ccc'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Casos', 'Recuperados', '1ª Dose', '2ª Dose', '3ª Dose', 'Dose Única']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
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
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Casos',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: this.dataChart,
        },
        {
          name: 'Recuperados',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: this.dataChart2,
        },
        {
          name: '1ª Dose',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: this.dataChart3,
        },
        {
          name: '2ª Dose',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: this.dataChart4,
        },
        {
          name: '3ª Dose',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: this.dataChart5,
        },
        {
          name: 'Dose Única',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: this.dataChart6,
        },
        
      ]
    };

    option && myChart.setOption(option);
  }

  public updateDataChart(): void {
    //Dados Casos
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


    //Dados Recuperados
    this.dataChart2[0].value = this.data[this.data.length - 28].recovered
    this.dataChart2[1].value = this.data[this.data.length - 27].recovered
    this.dataChart2[2].value = this.data[this.data.length - 26].recovered
    this.dataChart2[3].value = this.data[this.data.length - 25].recovered
    this.dataChart2[4].value = this.data[this.data.length - 24].recovered
    this.dataChart2[5].value = this.data[this.data.length - 23].recovered
    this.dataChart2[6].value = this.data[this.data.length - 22].recovered
    this.dataChart2[7].value = this.data[this.data.length - 21].recovered
    this.dataChart2[8].value = this.data[this.data.length - 20].recovered
    this.dataChart2[9].value = this.data[this.data.length - 19].recovered
    this.dataChart2[10].value = this.data[this.data.length - 18].recovered
    this.dataChart2[11].value = this.data[this.data.length - 17].recovered
    this.dataChart2[12].value = this.data[this.data.length - 16].recovered
    this.dataChart2[13].value = this.data[this.data.length - 15].recovered
    this.dataChart2[14].value = this.data[this.data.length - 14].recovered
    this.dataChart2[15].value = this.data[this.data.length - 13].recovered
    this.dataChart2[16].value = this.data[this.data.length - 12].recovered
    this.dataChart2[17].value = this.data[this.data.length - 11].recovered
    this.dataChart2[18].value = this.data[this.data.length - 10].recovered
    this.dataChart2[19].value = this.data[this.data.length - 9].recovered
    this.dataChart2[20].value = this.data[this.data.length - 8].recovered
    this.dataChart2[21].value = this.data[this.data.length - 7].recovered
    this.dataChart2[22].value = this.data[this.data.length - 6].recovered
    this.dataChart2[23].value = this.data[this.data.length - 5].recovered
    this.dataChart2[24].value = this.data[this.data.length - 4].recovered
    this.dataChart2[25].value = this.data[this.data.length - 3].recovered
    this.dataChart2[26].value = this.data[this.data.length - 2].recovered


    //Dados 1ª Dose
    this.dataChart3[0].value = this.data[this.data.length - 28].vaccinated
    this.dataChart3[1].value = this.data[this.data.length - 27].vaccinated
    this.dataChart3[2].value = this.data[this.data.length - 26].vaccinated
    this.dataChart3[3].value = this.data[this.data.length - 25].vaccinated
    this.dataChart3[4].value = this.data[this.data.length - 24].vaccinated
    this.dataChart3[5].value = this.data[this.data.length - 23].vaccinated
    this.dataChart3[6].value = this.data[this.data.length - 22].vaccinated
    this.dataChart3[7].value = this.data[this.data.length - 21].vaccinated
    this.dataChart3[8].value = this.data[this.data.length - 20].vaccinated
    this.dataChart3[9].value = this.data[this.data.length - 19].vaccinated
    this.dataChart3[10].value = this.data[this.data.length - 18].vaccinated
    this.dataChart3[11].value = this.data[this.data.length - 17].vaccinated
    this.dataChart3[12].value = this.data[this.data.length - 16].vaccinated
    this.dataChart3[13].value = this.data[this.data.length - 15].vaccinated
    this.dataChart3[14].value = this.data[this.data.length - 14].vaccinated
    this.dataChart3[15].value = this.data[this.data.length - 13].vaccinated
    this.dataChart3[16].value = this.data[this.data.length - 12].vaccinated
    this.dataChart3[17].value = this.data[this.data.length - 11].vaccinated
    this.dataChart3[18].value = this.data[this.data.length - 10].vaccinated
    this.dataChart3[19].value = this.data[this.data.length - 9].vaccinated
    this.dataChart3[20].value = this.data[this.data.length - 8].vaccinated
    this.dataChart3[21].value = this.data[this.data.length - 7].vaccinated
    this.dataChart3[22].value = this.data[this.data.length - 6].vaccinated
    this.dataChart3[23].value = this.data[this.data.length - 5].vaccinated
    this.dataChart3[24].value = this.data[this.data.length - 4].vaccinated
    this.dataChart3[25].value = this.data[this.data.length - 3].vaccinated
    this.dataChart3[26].value = this.data[this.data.length - 2].vaccinated


    //Dados 2ª Dose
    this.dataChart4[0].value = this.data[this.data.length - 28].vaccinated_second
    this.dataChart4[1].value = this.data[this.data.length - 27].vaccinated_second
    this.dataChart4[2].value = this.data[this.data.length - 26].vaccinated_second
    this.dataChart4[3].value = this.data[this.data.length - 25].vaccinated_second
    this.dataChart4[4].value = this.data[this.data.length - 24].vaccinated_second
    this.dataChart4[5].value = this.data[this.data.length - 23].vaccinated_second
    this.dataChart4[6].value = this.data[this.data.length - 22].vaccinated_second
    this.dataChart4[7].value = this.data[this.data.length - 21].vaccinated_second
    this.dataChart4[8].value = this.data[this.data.length - 20].vaccinated_second
    this.dataChart4[9].value = this.data[this.data.length - 19].vaccinated_second
    this.dataChart4[10].value = this.data[this.data.length - 18].vaccinated_second
    this.dataChart4[11].value = this.data[this.data.length - 17].vaccinated_second
    this.dataChart4[12].value = this.data[this.data.length - 16].vaccinated_second
    this.dataChart4[13].value = this.data[this.data.length - 15].vaccinated_second
    this.dataChart4[14].value = this.data[this.data.length - 14].vaccinated_second
    this.dataChart4[15].value = this.data[this.data.length - 13].vaccinated_second
    this.dataChart4[16].value = this.data[this.data.length - 12].vaccinated_second
    this.dataChart4[17].value = this.data[this.data.length - 11].vaccinated_second
    this.dataChart4[18].value = this.data[this.data.length - 10].vaccinated_second
    this.dataChart4[19].value = this.data[this.data.length - 9].vaccinated_second
    this.dataChart4[20].value = this.data[this.data.length - 8].vaccinated_second
    this.dataChart4[21].value = this.data[this.data.length - 7].vaccinated_second
    this.dataChart4[22].value = this.data[this.data.length - 6].vaccinated_second
    this.dataChart4[23].value = this.data[this.data.length - 5].vaccinated_second
    this.dataChart4[24].value = this.data[this.data.length - 4].vaccinated_second
    this.dataChart4[25].value = this.data[this.data.length - 3].vaccinated_second
    this.dataChart4[26].value = this.data[this.data.length - 2].vaccinated_second


    //Dados 3ª Dose
    this.dataChart5[0].value = this.data[this.data.length - 28].vaccinated_third
    this.dataChart5[1].value = this.data[this.data.length - 27].vaccinated_third
    this.dataChart5[2].value = this.data[this.data.length - 26].vaccinated_third
    this.dataChart5[3].value = this.data[this.data.length - 25].vaccinated_third
    this.dataChart5[4].value = this.data[this.data.length - 24].vaccinated_third
    this.dataChart5[5].value = this.data[this.data.length - 23].vaccinated_third
    this.dataChart5[6].value = this.data[this.data.length - 22].vaccinated_third
    this.dataChart5[7].value = this.data[this.data.length - 21].vaccinated_third
    this.dataChart5[8].value = this.data[this.data.length - 20].vaccinated_third
    this.dataChart5[9].value = this.data[this.data.length - 19].vaccinated_third
    this.dataChart5[10].value = this.data[this.data.length - 18].vaccinated_third
    this.dataChart5[11].value = this.data[this.data.length - 17].vaccinated_third
    this.dataChart5[12].value = this.data[this.data.length - 16].vaccinated_third
    this.dataChart5[13].value = this.data[this.data.length - 15].vaccinated_third
    this.dataChart5[14].value = this.data[this.data.length - 14].vaccinated_third
    this.dataChart5[15].value = this.data[this.data.length - 13].vaccinated_third
    this.dataChart5[16].value = this.data[this.data.length - 12].vaccinated_third
    this.dataChart5[17].value = this.data[this.data.length - 11].vaccinated_third
    this.dataChart5[18].value = this.data[this.data.length - 10].vaccinated_third
    this.dataChart5[19].value = this.data[this.data.length - 9].vaccinated_third
    this.dataChart5[20].value = this.data[this.data.length - 8].vaccinated_third
    this.dataChart5[21].value = this.data[this.data.length - 7].vaccinated_third
    this.dataChart5[22].value = this.data[this.data.length - 6].vaccinated_third
    this.dataChart5[23].value = this.data[this.data.length - 5].vaccinated_third
    this.dataChart5[24].value = this.data[this.data.length - 4].vaccinated_third
    this.dataChart5[25].value = this.data[this.data.length - 3].vaccinated_third
    this.dataChart5[26].value = this.data[this.data.length - 2].vaccinated_third



    //Dados Dose Única
    this.dataChart6[0].value = this.data[this.data.length - 28].vaccinated_single
    this.dataChart6[1].value = this.data[this.data.length - 27].vaccinated_single
    this.dataChart6[2].value = this.data[this.data.length - 26].vaccinated_single
    this.dataChart6[3].value = this.data[this.data.length - 25].vaccinated_single
    this.dataChart6[4].value = this.data[this.data.length - 24].vaccinated_single
    this.dataChart6[5].value = this.data[this.data.length - 23].vaccinated_single
    this.dataChart6[6].value = this.data[this.data.length - 22].vaccinated_single
    this.dataChart6[7].value = this.data[this.data.length - 21].vaccinated_single
    this.dataChart6[8].value = this.data[this.data.length - 20].vaccinated_single
    this.dataChart6[9].value = this.data[this.data.length - 19].vaccinated_single
    this.dataChart6[10].value = this.data[this.data.length - 18].vaccinated_single
    this.dataChart6[11].value = this.data[this.data.length - 17].vaccinated_single
    this.dataChart6[12].value = this.data[this.data.length - 16].vaccinated_single
    this.dataChart6[13].value = this.data[this.data.length - 15].vaccinated_single
    this.dataChart6[14].value = this.data[this.data.length - 14].vaccinated_single
    this.dataChart6[15].value = this.data[this.data.length - 13].vaccinated_single
    this.dataChart6[16].value = this.data[this.data.length - 12].vaccinated_single
    this.dataChart6[17].value = this.data[this.data.length - 11].vaccinated_single
    this.dataChart6[18].value = this.data[this.data.length - 10].vaccinated_single
    this.dataChart6[19].value = this.data[this.data.length - 9].vaccinated_single
    this.dataChart6[20].value = this.data[this.data.length - 8].vaccinated_single
    this.dataChart6[21].value = this.data[this.data.length - 7].vaccinated_single
    this.dataChart6[22].value = this.data[this.data.length - 6].vaccinated_single
    this.dataChart6[23].value = this.data[this.data.length - 5].vaccinated_single
    this.dataChart6[24].value = this.data[this.data.length - 4].vaccinated_single
    this.dataChart6[25].value = this.data[this.data.length - 3].vaccinated_single
    this.dataChart6[26].value = this.data[this.data.length - 2].vaccinated_single

  }




}
