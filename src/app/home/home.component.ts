import { Component, OnInit } from '@angular/core';

//Interfaces
import { ICovidCities } from '../interfaces/iCovidCities';
import { ICovidState } from '../interfaces/iCovidState';

//Services
import { CovidCitiesService } from '../services/covidCities/covid-cities.service';
import { CovidStatesService } from '../services/covidStates/covidStates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  public states: Array<ICovidState> = [];
  public cities: Array<ICovidCities> = [];

  public dateSelectCities: Array<ICovidState> = [];
  public abrir: boolean = false;

  public vac_tot?: any;
  public casos?: any;
  public obitos?: any;
  public recuperados?: any;

  constructor(
    private citiesService: CovidCitiesService,
    private statesService: CovidStatesService
  ) {}

  
  ngOnInit(): void {
    this.getDataStates();
    this.getDataCities();
    setInterval(() => this.abrir = true, 5000);
    
  }

  private getDataCities(): void {
    this.citiesService.getData().subscribe((data) => {
      const list = data.split('\n');
      list.forEach((e: any) => {
        const item = e.split(',');
        this.cities.push({
          uf: item[1],
          name: item[2],
          deaths: item[4],
          new_deaths: item[12],
          total_cases: item[5],
          new_cases: item[11],
          date: item[10],
        });
        this.cities.sort((a, b) => a.uf.localeCompare(b.uf));
      });
      this.cities.splice(0, 1);
    });
  }

  private getDataStates(): void {
    this.statesService.getData().subscribe((data) => {
      const list = data.split('\n');
      list.forEach((e: any) => {
        const item = e.split(',');
        // var hoje = new Date();
        // var ontem = new Date(hoje.getTime());
        // ontem.setDate(hoje.getDate() - 1);
        // var dd: any = ontem.getDate();
        // var mm: any = ontem.getMonth() + 1;
        // // var yyyy = ontem.getFullYear();
        // var yyyy = 2022;
        // if (dd < 10) {
        //   dd = '0' + dd;
        // }
        // if (mm < 10) {
        //   mm = '0' + mm;
        // }
        let ultimaAtualizacao = '2023-03-18';
        if (item[1] == ultimaAtualizacao) {
          this.states.push({
            date: item[1],
            country: item[2],
            state: item[3],
            city: item[4],
            newDeaths: item[5],
            deaths: item[6],
            recovered: item[14],
            suspects: item[15],
            tests: item[16],
            vaccinated: item[18],
            vaccinated_second: item[20],
            vaccinated_third: item[24],
            vaccinated_single: item[22],
            cases: item[8],
            newCases: item[7],
            
          });
        }
      });
      // this.states.splice(0, 1);
      this.states.sort((item1, item2) => item2.date.localeCompare(item1.date));
      // this.states.splice(this.states.length - 1, 1);
      this.vac_tot = Number(this.states[27].vaccinated) + Number(this.states[27].vaccinated_second) + Number(this.states[27].vaccinated_third) + Number(this.states[27].vaccinated_single)
      this.vac_tot = new Intl.NumberFormat('pt-BR').format(this.vac_tot);

      this.casos = this.states[27].cases
      this.casos = new Intl.NumberFormat('pt-BR').format(this.casos);

      this.obitos = this.states[27].deaths
      this.obitos = new Intl.NumberFormat('pt-BR').format(this.obitos);

      this.recuperados = this.states[27].recovered
      this.recuperados = new Intl.NumberFormat('pt-BR').format(this.recuperados);
      
    });
    this.getPerDate();
  }

  //formata os numeros para o estilo brasileiro
  public brNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value);
  }

  private getPerDate(): void {
    this.states.forEach((item) => {
      if (item.date == this.states[1].date) {
        this.dateSelectCities.push(item);
        console.log('inpput');
      }
    });
    this.states.sort((item1, item2) => item2.state.localeCompare(item1.state));
  }
}
