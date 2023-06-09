import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  // products: IProduct[] = [];
  // searchTerm: string = '';

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = data;
    //   // console.log(data);
    // });
  }

  // searchProduct() {
  //   this.productService.search(this.searchTerm).subscribe(
  //     (products: IProduct[]) => {
  //       this.products = products;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  searchProduct(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredProducts = this.products;
  }

}
