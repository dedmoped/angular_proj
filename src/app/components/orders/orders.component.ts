import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Data } from 'src/app/models/Data';
import { DataService } from 'src/app/services/data/data.service';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  tasks:MatTableDataSource<Data>;
  value1 = '';
  id:string;
  name:string;
  description:string;
  cronTime:string;
  sourceApi:string;
  columns=['id','name','description','lastGetDataTime','cronTime','sourceApi','apiParams','actions']
  constructor(private data:DataService,private router:Router) { }
  ngOnInit(): void {
    this.getData();
  }

  sayHello(st:number){
     alert(st);
  }

  deleteTask(id:string){
    this.data.deleteData(id).subscribe(res=>{alert("Ок")},err=>{alert("err")});
    window.location.reload();
  }
getData(){
  this.data.getData().subscribe(res=>{this.tasks= new MatTableDataSource(res)},error=>{alert("error")})
}

updateRow(id:string,name:string,description:string,cronTime:string,sourceApi){
  this.id=id;
  this.name=name;
  this.sourceApi=sourceApi;
  this.cronTime=cronTime;
  this.description=description;
}
}
