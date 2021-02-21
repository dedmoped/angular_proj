import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor(private usersdata:DataService) { }
  data:any;
  columns=['userId','userEmail','countTask']
  ngOnInit(): void {
    this.usersdata.getStatistic().subscribe(res=>{this.data=res},err=>{alert("Chech you permissions")})
  }

}
