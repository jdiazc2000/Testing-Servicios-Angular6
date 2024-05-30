export class ValueFakeService {
  private value: string = "fake promise value"
  
  constructor() { }

  GetValue(){
    return this.value;
  }
}
