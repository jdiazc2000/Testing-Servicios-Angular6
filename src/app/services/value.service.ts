import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  private value: string = "my value"
  constructor() { }

  GetValue(){
    return this.value;
  }

  SetValue(value: string){
    this.value = value;
  }

  GetPromiseValue(){
    return Promise.resolve('promise value');
  }
  
  getObserverValue(){
    return of('observableValue')
  }
}
