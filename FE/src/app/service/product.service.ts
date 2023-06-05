import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../component/interface/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:8088/api/show')
  }
  getProduct(id: number | string | null): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:8088/api/showProdctDetail/' + id);
  }
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8088/api/delete/' + id);
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:8088/api/add', product)
  }
  updateProduct(product:IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:8088/api/update/${product._id}`,product)
  }
}
