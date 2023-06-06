import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  constructor(private fb: FormBuilder, private ps: ProductService) {}
  productForm = this.fb.group({
    name: [''],
    price: [0],
    desc: [''],
    img: [''],
    cate: [0],
  });
  addProduct() {
    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      desc: this.productForm.value.desc || '',
      img: this.productForm.value.img || '',
      cate: this.productForm.value.cate || 0,
    };
    this.ps.addProduct(product).subscribe((data) => {
      console.log(data);
    });
  }
}
