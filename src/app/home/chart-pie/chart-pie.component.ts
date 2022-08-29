import { Component, OnInit, Input } from '@angular/core';
import { ICovidState } from 'src/app/interfaces/iCovidState';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  @Input() data: Array<ICovidState> = [];
  public dataChart = [{name: "Casos", value: 0}, {name: "Recuperados", value: 0}, {name: "1ª Dose", value: 0}, {name: "2ª Dose", value: 0}, {name: "3ª Dose", value: 0}, {name: "Dose Única", value: 0}, {name: "Óbitos", value: 0}];

  ngOnInit(): void {
    this.createChart();
  }

  public createChart() {
    this.updateDataChart();

    var chartDom = document.getElementById('chart')!;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      color: ['#5470c6', '#3ba272', '#fac858', '#fc8452', '#73c0de', '#ea7ccc', '#ee6666'],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Total',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: this.dataChart,
        },
      ],
    };

    option && myChart.setOption(option);
  }

  public updateDataChart(): void {
    this.dataChart[0].value = this.data[this.data.length - 1].cases
    this.dataChart[1].value = this.data[this.data.length - 1].recovered
    this.dataChart[2].value = this.data[this.data.length - 1].vaccinated
    this.dataChart[3].value = this.data[this.data.length - 1].vaccinated_second
    this.dataChart[4].value = this.data[this.data.length - 1].vaccinated_third
    this.dataChart[5].value = this.data[this.data.length - 1].vaccinated_single
    this.dataChart[6].value = this.data[this.data.length - 1].deaths
    
   
  }
}

// #5470c6, #73c0de, #3ba272, #fc8452, #9a60b4, #91cc75, #ea7ccc, #fac858, #ee6666