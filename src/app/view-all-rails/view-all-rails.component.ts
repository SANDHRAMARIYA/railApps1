import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-rails',
  templateUrl: './view-all-rails.component.html',
  styleUrls: ['./view-all-rails.component.css']
})
export class ViewAllRailsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }



  fetchData=()=>{
    this.myapi.viewTrains().subscribe(
      (data)=>{
        this.trainsData=data
      }
    )
  }
  
trainsData:any={}
  ngOnInit(): void {
  }

}
