import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 products : IProduct [] = []

 constructor (private productService: ProductService){
  this.productService.getProducts().subscribe((data)=> {
    this.products = data
    console.log(data);
    
  })
 }
 removeItem(id: any){
  this.productService.deleteProduct(id).subscribe(()=> {
    this.products = this.products.filter(item => item._id != id)
  })
 }
}
