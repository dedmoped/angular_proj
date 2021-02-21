import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app-injection-tokens';
import { Data } from 'src/app/models/Data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getStatistic() {
    return this.http.get(`${this.apiurl}api/data/statistic`)
  }

  constructor(private http:HttpClient,@Inject(API_URL)private apiurl:string) { }

  getData():Observable<Data[]>
  {
    return this.http.get<Data[]>(`${this.apiurl}api/data/task`);
  }
  setData(data:Data){
    const form = new FormData();
    form.append("data",JSON.stringify(data));
    return this.http.post(`${this.apiurl}api/data/job`,form)
  }
  deleteData(id:string){
    return this.http.delete(`${this.apiurl}api/data/task/`+id)
  }
  updateDate(Id:string,Name:string,Description:string,cronTime:string,sourceApi:string,apiParams:string){
    const startTime=Date.now().toString();
    return this.http.post(`${this.apiurl}api/data/update`,{Id,Name,Description,cronTime,sourceApi,apiParams,startTime});

  }
}
