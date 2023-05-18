import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = "http://localhost:8080"

  constructor(
    private _http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this._http.get(`${this.API_URL}/products`)
  }
  getReviews(productId: number): Observable<any> {
    return this._http.get(`${this.API_URL}/reviews`)
      .pipe(map((reviews: any) => reviews[productId]))
  }

}
