import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  API_URL: string = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<any>(this.API_URL);
  }
  getProduct(id: number) {
    return this.httpClient.get<any>(`${this.API_URL}/${id}`);
  }
  updateProduct(id: number, product: any) {
    return this.httpClient.put<any>(`${this.API_URL}/${id}`, product);
  }
  createProduct(product: any) {
    return this.httpClient.post<any>(`${this.API_URL}`, product);
  }
  deleteProduct(id: number) {
    return this.httpClient.delete<any>(`${this.API_URL}/${id}`);
  }
}
