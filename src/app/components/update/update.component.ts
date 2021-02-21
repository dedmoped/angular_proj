import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private data:DataService,private toastr: ToastrService) { }
  @Input() id:string;
  @Input() name:string;
  @Input() description:string;
  @Input() cronTime:string;
  @Input() sourceApi:string;
  @Input() apiParams:string;
  ngOnInit(): void {
  }

  update()
  {
this.data.updateDate(this.id,this.name,this.description,this.cronTime,this.sourceApi,this.apiParams).subscribe(res=>{this.toastr.success("Обновление прошло успешно")},err=>{this.toastr.error("Error")});
  }
}
