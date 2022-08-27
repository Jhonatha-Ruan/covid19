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
  public dataChart = [{name: "Obitos", value: 0}, {name: "Recuperados", value: 0}, {name: "1ª Dose", value: 0}, {name: "2ª Dose", value: 0}, {name: "3ª Dose", value: 0}, {name: "Dose Única", value: 0}, {name: "Casos", value: 0}];

  ngOnInit(): void {
    this.createChart();
  }

  public createChart() {
    this.updateDataChart();

    var chartDom = document.getElementById('chart')!;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
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
    this.dataChart[0].value = this.data[this.data.length - 1].deaths
    this.dataChart[1].value = this.data[this.data.length - 1].recovered
    this.dataChart[2].value = this.data[this.data.length - 1].vaccinated
    this.dataChart[3].value = this.data[this.data.length - 1].vaccinated_second
    this.dataChart[4].value = this.data[this.data.length - 1].vaccinated_third
    this.dataChart[5].value = this.data[this.data.length - 1].vaccinated_single
    this.dataChart[6].value = this.data[this.data.length - 1].cases
    
   
  }
}

