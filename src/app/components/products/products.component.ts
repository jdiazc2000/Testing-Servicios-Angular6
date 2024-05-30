import { Component, OnInit } from '@angular/core';
import { generateManyProducts } from 'src/app/mocks/product.mock';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.GetAllProducts();
    //console.log(generateManyProducts())
  }

  GetAllProducts(){
    this.productService.getAllSimple().subscribe(data => {
      this.products = data;
    }, error => {
      console.log(error)
    } )
  }

}
