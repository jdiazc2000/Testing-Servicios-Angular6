import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { generateManyProducts } from '../mocks/product.mock';

describe('ProductsService', () => {
  let Productservice: ProductsService;
  let httpController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    Productservice = TestBed.get(ProductsService);
    httpController = TestBed.get(HttpTestingController);
  });

  it('should be create', () => {
    expect(Productservice).toBeTruthy();
  })

  describe('tests for getAllSimple',  () => {
    it('should return a product list', async (doneFn) =>{
      //const data: Product[] = await generateManyProducts();
      const mockData: Product[] = [{
        id: '123',
        title: 'title',
        price: 12,
        description: 'aaaa',
        category: {
          id: 112,
          name: 'as'
        },
        images: ['img','img']
      }];

      Productservice.getAllSimple().subscribe((data) => {
        expect(data.length).toEqual(mockData.length)
        expect(data).toEqual(mockData)
        doneFn();
      });

      const url = `${environment.API_URL}api/v1/products`
      const req = httpController.expectOne(url)
      req.flush(mockData);
      httpController.verify();
    })
  })

});
