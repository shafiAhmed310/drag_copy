import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckserviceService {

  constructor(private http:HttpClient) { }
  readData(data: any){
    console.log(data);
    return this.http.get<{data:any[]}>('https://jsonplaceholder.typicode.com/todos/1')
  }
}
