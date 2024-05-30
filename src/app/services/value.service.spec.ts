

import { ValueService } from './value.service';
import { TestBed } from '@angular/core/testing';

describe('ValueService', () => {
    let service: ValueService

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ValueService]
      })
      service = TestBed.get(ValueService);
    })

    it('should be created', () => {
      expect(service).toBeTruthy();
    })

    describe('Test for GetValue', () => {
      it('should return "my value"', () => {
        expect(service.GetValue()).toBe("my value")
      })
    })

    describe('Test for SetValue', () => {
      it('should change value', () => {
        expect(service.GetValue()).toBe("my value");
        service.SetValue('change');
        expect(service.GetValue()).not.toBe('my value');
      })
    })

    // describe('Test for GetPromiseValue', () => {
    //   it('should change "promise value" from promise with then', (doneFn) => {
    //     service.GetPromiseValue().then((value) => {
    //       expect(value).toBe("promise value");
    //       doneFn();
    //     })
    //   })
    // })

    describe('Test for GetPromiseValue', () => {
      it('should change "promise value" from promise with async', async () => {
        const rta = await service.GetPromiseValue();
        expect(rta).toBe("promise value");
      })
    })
});
