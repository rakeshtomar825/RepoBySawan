import { CovidTrackerService } from 'src/app/services/covid-tracker.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsRecords : any = 0;
  values : any;
  searchVal : any;
  constructor(
    private api : CovidTrackerService,
    ) { }

  ngOnInit(): void {
    this.getAllNews(this.searchVal)
  }


  getAllNews(searchVal : any){
    this.api.getNewsDataa(searchVal)
    .subscribe( res => {
      this.newsRecords = res;
    })
  }

  searchData(event:any){  
    var searchVal = event.target.value;
    this.newsRecords = this.getAllNews(searchVal);
  }


}
