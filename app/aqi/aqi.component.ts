import { Component, OnInit } from '@angular/core';
import { CovidTrackerService } from 'src/app/services/covid-tracker.service';
import * as _ from 'lodash'; 
import { format } from 'timeago.js';

@Component({
  selector: 'app-aqi',
  templateUrl: './aqi.component.html',
  styleUrls: ['./aqi.component.css']
})
export class AqiComponent implements OnInit {
  aqiData : any = [];
  socket: any;
  Date : any;
  
  readonly url : string = 'wss://city-ws.herokuapp.com/';
  constructor(private api : CovidTrackerService) {
    this.socket = new WebSocket(this.url)
    this.Date = format(new Date(), 'en_US')
   }
  ngOnInit(): void {
    
    this.socket.onopen = (data:any) => {
      console.log('Connected');
    }
    this.socket.onclose = (data:any) => {
      console.log('Connection Closed');
    }
    this.socket.onmessage = (data:any)=>{
      this.aqiData = JSON.parse(data.data)
      ///console.log(this.aqiData);
    }
    
  }


  // getAllEmployee(){
  //   this.api.webSocketAqi()
  //   .subscribe( (res:any)  => {
  //     console.log(res);
  //     this.aqiData = res;
  //   })
  // }


  

}
