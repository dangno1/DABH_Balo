import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { catchError } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8088/api/show');
  }
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(
      'http://localhost:8088/api/showProductDetail/' + id
    );
  }
  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8088/api/delete/' + id);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:8088/api/add', product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(
      `http://localhost:8088/api/update/${product._id}`,
      product
    );
  }
  // search(searchTerm: string): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(`https://localhost:8088/api/search?name=${searchTerm}`);
  // }
  search(term: string): Observable<IProduct[]> {
    if (!term.trim()) {
      // Nếu từ khóa tìm kiếm rỗng thì trả về toàn bộ sản phẩm
      return this.getProducts();
    }
    const url = `https://localhost:8088/api/search?name_like=${term}`;
    return this.http.get<IProduct[]>(url);
  }
  
  
}
