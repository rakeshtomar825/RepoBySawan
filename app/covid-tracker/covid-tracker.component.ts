import { Component, OnInit } from '@angular/core';
import { CovidTrackerService } from 'src/app/services/covid-tracker.service'




@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.css']
})
export class CovidTrackerComponent implements OnInit {
  covidRecords !: any;
  values : any;
  // aaa : any;
  

  constructor(
    private api : CovidTrackerService,

    ) { }

  ngOnInit(): void {
    // const {activeCases,activeCasesNew,recovered,recoveredNew,deaths,deathsNew,totalCases,regionDatat} = this.covidRecords;
    // console.log("@@@@@@@@@@@@",activeCasesNew);
    this.getAllCovidCase();
  }
  

  getAllCovidCase(){
    this.api.getCovidRecord()
    .subscribe( res => {
      console.log("okk",res);
      this.covidRecords = res;
      // const {activeCases,activeCasesNew,recovered,recoveredNew,deaths,deathsNew,totalCases,regionDatat} = res;
      // this.aaa = activeCases;
      // console.log("activeCasesmmmmmmmmm",activeCases);
      // console.log("activeCasesNewmmmmmmmmm",activeCasesNew);
    })
  }

  //  numberWithCommas(n:any) {
  //   var parts=n.toString().split(".");
  //   return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  // }

  //totalActiveCase:any = this.numberWithCommas(this.covidRecords.totalCases);
  // searchState(){
  //   alert("Boom");
  // }

  searchState(event:any) { // without type info
    this.values += event.target.value + ' | ';
    console.log("@@@@@@@@@@",this.values);
  }

}
