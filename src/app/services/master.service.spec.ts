

import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { ValueFakeService } from './value-fake.service';
import { TestBed } from '@angular/core/testing';

describe('Test MasterService', () => {
  let masterService: MasterService
  let valueServiceSpy: jasmine.SpyObj<ValueService>

  beforeEach(() => {
    let spy = jasmine.createSpyObj('ValueService',['GetValue']);

    TestBed.configureTestingModule({
      providers: [MasterService, {provide: ValueService, useValue: spy}]
    })
    masterService = TestBed.get(MasterService);
    valueServiceSpy = TestBed.get(ValueService) as jasmine.SpyObj<ValueService>;
  })

  it('should be create', () => {
      expect(masterService).toBeTruthy();
  })

  // it('should return "my value" from the real service', () => {
  //   const valueService = new ValueService();
  //   const masterService = new MasterService(valueService);
  //   expect(masterService.GetValue()).toBe("my value");
  // })

  // it('should return "other value" from the fake service', () => {
  //   const fakevalueService = new ValueFakeService();
  //   const masterService = new MasterService(fakevalueService as any as ValueService);
  //   expect(masterService.GetValue()).toBe("fake promise value");
  // })

  // it('should return "other value" from the fake object', () => {
  //   const fake = {GetValue: () => {return "fake promise value"}}
  //   const masterService = new MasterService(fake as ValueService);
  //   expect(masterService.GetValue()).toBe("fake promise value");
  // })

  it('should call GetValue from ValueService', () => {
    valueServiceSpy.GetValue.and.returnValue('fake promise value');
    expect(masterService.GetValue()).toBe("fake promise value");
    expect(valueServiceSpy.GetValue).toHaveBeenCalled();
  })
});
