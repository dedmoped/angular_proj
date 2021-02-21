import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() apiType: string;
  countries:any[]=["fdsf","fdsf","lol"];
  @Output() newItemEvent= new EventEmitter<string>();
  form_template = [
  {
    "type":"select",
      "label":"Actors",
      "options":["get-title-news","get-all-news"],
  },
  {
    "type":"select",
      "label":"Hearthstone",
      "options":["Basic-Cards","Class-Cards"],
  }
  ]
  myFormGroup:FormGroup;
  selectedOptions:string="";
  clasess:string="";
  countr:string="Belarus";
  isApi:boolean=false;
  constructor() {}    
  ngOnInit() {
    let group={}    
    this.form_template.forEach(input_template=>{
      group[input_template.label]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);  
  }
  onChange(event){
    console.log(event)
    this.newItemEvent.emit(event);
  }
onSearch(search){
  this.newItemEvent.emit(search.target.value);
}
  onSubmit(){
    console.log(this.myFormGroup.value);
  }
}

