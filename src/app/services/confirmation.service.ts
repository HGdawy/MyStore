import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  confD={fullName:"",totalPrice:0}

  constructor() { }

  conf(f:string,t:number){
this.confD={
  fullName:f,
  totalPrice:t
}
  }
}
