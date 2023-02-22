import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }
  sendManger(key:string,data:any){
    localStorage.setItem(key,JSON.stringify(data));
  }
  
  getData(sendDataId:string){
    if(localStorage.getItem(sendDataId)!==null){
      return localStorage.getItem(sendDataId);
   
  }
  else return -1;

  }
}
